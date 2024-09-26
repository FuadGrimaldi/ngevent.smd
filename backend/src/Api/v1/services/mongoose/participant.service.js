const Participant = require("../../models/participant.model");
const Event = require("../../models/event.model");
const Order = require("../../models/order.model");
// const Payment = require("../../models/payments.model");

const {
  BadRequesError,
  NotFoundError,
  UnauthorizedError,
} = require("../../../../errors");

const { createTokenParticipant } = require("../../../../helpers/createToken");

const { createJWT } = require("../../../../middlewares/jwt");

const { otpMail } = require("../email");

const signUp = async (req) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    // jika email dan status tidak aktif
    let result = await Participant.findOne({
      email,
      status: "tidak aktif",
    });

    if (result) {
      result.firstName = firstName;
      result.lastName = lastName;
      result.role = role;
      result.email = email;
      result.password = password;
      result.otp = Math.floor(Math.random() * 9999);
      await result.save();
    } else {
      result = await Participant.create({
        firstName,
        lastName,
        email,
        password,
        role,
        otp: Math.floor(Math.random() * 9999),
      });
    }
    await otpMail(email, result);

    delete result._doc.password;
    delete result._doc.otp;

    return result;
  } catch (error) {
    throw error;
  }
};

const activateParticipant = async (req) => {
  try {
    const { otp, email } = req.body;
    const check = await Participant.findOne({
      email,
    });

    if (!check) throw new NotFoundError("Participant not found");

    if (check && check.otp !== otp) throw new BadRequesError("wrong otp code");

    const result = await Participant.findByIdAndUpdate(
      check._id,
      {
        status: "aktif",
      },
      { new: true }
    );

    delete result._doc.password;

    return result;
  } catch (error) {
    throw error;
  }
};

const signIn = async (req) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new BadRequesError("Please provide email and password");
    }

    const result = await Participant.findOne({ email: email });

    if (!result) {
      throw new UnauthorizedError("Invalid Credentials");
    }

    if (result.status === "tidak aktif") {
      throw new UnauthorizedError("Akun anda belum aktif");
    }

    const isPasswordCorrect = await result.comparePassword(password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedError("Invalid Credentials");
    }

    const token = createJWT({ payload: createTokenParticipant(result) });

    return token;
  } catch (error) {
    throw error;
  }
};

const getAllEvents = async () => {
  try {
    const result = await Event.find({ statusEvent: "Published" })
      .populate("categories")
      .populate("image")
      .select("_id title date tickets venueName");

    return result;
  } catch (error) {
    throw error;
  }
};

const getOneEvent = async (req) => {
  try {
    const id = req.params.id;
    const result = await Event.findById(id)
      .populate("categories")
      .populate({ path: "talent", populate: "image_id" })
      .populate("image");

    if (!result) throw new NotFoundError("Event not found");
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllOrders = async (req) => {
  try {
    console.log(req.participant);
    const result = await Order.find({ participant: req.participant.id });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  signUp,
  activateParticipant,
  signIn,
  getAllEvents,
  getOneEvent,
  getAllOrders,
};
