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

const createUser = async (req, res) => {
  try {
    const data = await userService.createUser(req);
    res
      .status(201)
      .json(customResponse(201, "User admin created successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await userService.getAllByOrganizer(req);
    res
      .status(200)
      .json(customResponse(201, "User retrived successfully", data));
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
  createUser,
  getAllUser,
};
