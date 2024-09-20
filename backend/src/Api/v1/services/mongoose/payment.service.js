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

module.exports = {
  create,
  getAll,
};
