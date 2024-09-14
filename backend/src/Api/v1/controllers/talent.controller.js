const { customResponse } = require("../../../helpers/responseHelpers");
const talentService = require("../services/mongoose/talent.service");

const getAllTalent = async (req, res) => {
  try {
    const data = await talentService.getAll(req);
    res
      .status(200)
      .json(customResponse(200, "Talent retrieved successfully", data));
  } catch (error) {
    console.log(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const getOneTalent = async (req, res) => {
  try {
    const data = await talentService.getById(req);
    res
      .status(200)
      .json(customResponse(200, "Talent retrieved successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const createTalent = async (req, res) => {
  try {
    const data = await talentService.create(req);
    res
      .status(201)
      .json(customResponse(201, "Talent created successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const updateTalent = async (req, res) => {
  try {
    const data = await talentService.update(req);
    res
      .status(200)
      .json(customResponse(200, "Talent update successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const deletedTalent = async (req, res) => {
  try {
    await talentService.destroy(req);
    res
      .status(200)
      .json(customResponse(200, "talent delete successfully", null));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

module.exports = {
  createTalent,
  getAllTalent,
  getOneTalent,
  updateTalent,
  deletedTalent,
};
