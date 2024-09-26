const participantService = require("../services/mongoose/participant.service");
const { customResponse } = require("../../../helpers/responseHelpers");

const signup = async (req, res) => {
  try {
    const data = await participantService.signUp(req);
    res
      .status(201)
      .json(customResponse(201, "Participant created successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const activateParticipant = async (req, res) => {
  try {
    const data = await participantService.activateParticipant(req);
    res
      .status(200)
      .json(
        customResponse(200, "Status participant active successfully", data)
      );
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const signin = async (req, res) => {
  try {
    const data = await participantService.signIn(req);
    res
      .status(201)
      .json(customResponse(201, "Login successfully", { token: data }));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const getAllEventsLandingPage = async (req, res) => {
  try {
    const data = await participantService.getAllEvents();
    res
      .status(200)
      .json(customResponse(200, "get all events successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const getDetailLandingPage = async (req, res) => {
  try {
    const data = await participantService.getOneEvent(req);
    res
      .status(200)
      .json(customResponse(200, "detail events successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const getDashboard = async (req, res) => {
  try {
    const data = await participantService.getAllOrders(req);
    res
      .status(200)
      .json(customResponse(200, "orders retrived successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

module.exports = {
  signup,
  activateParticipant,
  signin,
  getAllEventsLandingPage,
  getDetailLandingPage,
  getDashboard,
};
