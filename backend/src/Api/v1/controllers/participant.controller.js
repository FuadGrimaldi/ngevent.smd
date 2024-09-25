const participantService = require("../services/mongoose/participant.service");
const { customResponse } = require("../../../helpers/responseHelpers");

const signup = async (req, res) => {
  try {
    const data = await participantService.signupParticipant(req);
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

module.exports = {
  signup,
};
