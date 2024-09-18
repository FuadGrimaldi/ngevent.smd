const { BadRequesError, NotFoundError } = require("../../../../errors");
const Image = require("../../models/image.model");

const create = async (req) => {
  const result = await Image.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : "uploads/avatar/default.jpg",
  });
  return result;
};

const checkImage = async (id) => {
  const result = await Image.findOne({ _id: id });
  if (!result) throw new NotFoundError("image not found");
  return result;
};

module.exports = {
  create,
  checkImage,
};
