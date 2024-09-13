const imageService = require("../services/mongoose/image.service");
const { customResponse } = require("../../../helpers/responseHelpers");

const createImage = async (req, res) => {
  try {
    const data = await imageService.create(req);
    res
      .status(201)
      .json(customResponse(201, "Images created successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

module.exports = {
  createImage,
};
