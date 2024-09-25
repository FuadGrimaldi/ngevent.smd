const Participant = require("../../models/participant.model");
// const Event = require("../../models/event.model");
// const Order = require("../../models/orders.model");
// const Payment = require("../../models/payments.model");

const {
  BadRequesError,
  NotFoundError,
  UnauthorizedError,
} = require("../../../../errors");

const {
  createTokenParticipant,
} = require("../../../../helpers/createTokenUser");

const { createJwt } = require("../../../../middlewares/jwt");

const { otpMail } = require("../email");

const signupParticipant = async (req) => {
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

module.exports = { signupParticipant };
