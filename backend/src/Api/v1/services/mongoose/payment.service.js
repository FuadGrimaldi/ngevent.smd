const Payment = require("../../models/payment.model");
const { BadRequesError, NotFoundError } = require("../../../../errors");
const { checkImage } = require("./image.service");

const create = async (req) => {
  try {
    const { type, image } = req.body;
    // check image
    await checkImage(image);
    // check talent
    const check = await Payment.findOne({
      type,
      organizer: req.user.organizer,
    });

    if (check) throw new BadRequesError("Type Payment already exist");

    return await Payment.create({
      type,
      image,
      organizer: req.user.organizer,
    });
  } catch (error) {
    console.error("Error creating payments:", error);
    throw error;
  }
};

const getAll = async () => {
  try {
    return await Payment.find();
  } catch (error) {
    console.error("Error getting all payments:", error);
    throw error;
  }
};

const getAllByOrganizer = async (req) => {
  let condition = { organizer: req.user.organizer };

  const result = await Payment.find(condition)
    .populate({
      path: "image",
      select: "_id name",
    })
    .select("_id type status image");

  return result;
};

const getOne = async (req) => {
  const { id } = req.params;

  const result = await Payment.findOne({
    _id: id,
    organizer: req.user.organizer,
  })
    .populate({
      path: "image",
      select: "_id name",
    })
    .select("_id type status image");

  if (!result) throw new NotFoundError(`payment method not found :  ${id}`);

  return result;
};

const update = async (req) => {
  const { id } = req.params;
  const { type, image } = req.body;

  await checkingImage(image);

  const check = await Payment.findOne({
    type,
    organizer: req.user.organizer,
    _id: { $ne: id },
  });

  if (check) throw new BadRequestError("payment method alrady exists");

  const result = await Payments.findOneAndUpdate(
    { _id: id },
    { type, image, organizer: req.user.organizer },
    { new: true, runValidators: true }
  );

  if (!result) throw new NotFoundError(`payment method not found :  ${id}`);

  return result;
};

const destroy = async (req) => {
  const { id } = req.params;

  const result = await Payment.findOne({
    _id: id,
    organizer: req.user.organizer,
  });

  if (!result) throw new NotFoundError(`payment method not found :  ${id}`);

  await result.remove();

  return result;
};

const checkingPayments = async (id) => {
  const result = await Payment.findOne({ _id: id });

  if (!result) throw new NotFoundError(`payment method not found :  ${id}`);

  return result;
};

module.exports = {
  create,
  getAll,
  getAllByOrganizer,
  getOne,
  update,
  destroy,
  checkingPayments,
};
