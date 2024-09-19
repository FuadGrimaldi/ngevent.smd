const paymentService = require("../services/mongoose/payment.service");
const { customResponse } = require("../../../helpers/responseHelpers");

const createPayment = async (req, res) => {
  try {
    const data = await paymentService.create(req);
    res
      .status(201)
      .json(customResponse(201, "Payment created successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

module.exports = {
  createPayment,
};
