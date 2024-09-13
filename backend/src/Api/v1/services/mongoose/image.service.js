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

module.exports = {
  create,
};
