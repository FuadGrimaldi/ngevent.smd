const { customResponse } = require("../../../helpers/responseHelpers");
const eventService = require("../services/mongoose/event.service");

const createEvent = async (req, res) => {
  try {
    const data = await eventService.create(req);
    res
      .status(201)
      .json(customResponse(201, "Event created successfully", data));
  } catch (error) {
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const getAllEvent = async (req, res) => {
  try {
    const data = await eventService.getAll(req);
    res
      .status(200)
      .json(customResponse(200, "Events retrieved successfully", data));
  } catch (error) {
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const getOneEvent = async (req, res) => {
  try {
    const data = await eventService.getOneById(req);
    res
      .status(200)
      .json(customResponse(200, "Event retrieved successfully", data));
  } catch (error) {
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const updateEvent = async (req, res) => {
  try {
    const data = await eventService.update(req);
    res
      .status(200)
      .json(customResponse(200, "Update event successfully", data));
  } catch (error) {
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const deleteEvent = async (req, res) => {
  try {
    const data = await eventService.destroy(req);
    res
      .status(200)
      .json(customResponse(200, "Deleted event successfully", data));
  } catch (error) {
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};
module.exports = {
  createEvent,
  getAllEvent,
  getOneEvent,
  updateEvent,
  deleteEvent,
};
