const { customResponse } = require("../../../helpers/responseHelpers");
const userService = require("../services/mongoose/user.service");

const createOrganizer = async (req, res) => {
  try {
    const data = await userService.createOrganizer(req);
    res
      .status(201)
      .json(customResponse(201, "User organizer created successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

module.exports = {
  createOrganizer,
};
