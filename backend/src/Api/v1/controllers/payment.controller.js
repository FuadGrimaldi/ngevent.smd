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

const getAllPayment = async (req, res) => {
  try {
    const data = await paymentService.getAll();
    res
      .status(200)
      .json(
        customResponse(200, "all payment method retrieved successfully", data)
      );
  } catch (error) {
    console.log(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};
const getAllPaymentByOrganizer = async (req, res) => {
  try {
    const data = await paymentService.getAllByOrganizer();
    res
      .status(200)
      .json(
        customResponse(200, "all payment method retrieved successfully", data)
      );
  } catch (error) {
    console.log(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const getOnePayment = async (req, res) => {
  try {
    const data = await paymentService.getById(req);
    res
      .status(200)
      .json(customResponse(200, "Payment retrieved successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const updatePayment = async (req, res) => {
  try {
    const data = await paymentService.update(req);
    res
      .status(200)
      .json(customResponse(200, "Payment updated successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const deletePayment = async (req, res) => {
  try {
    await paymentService.destroy(req);
    res
      .status(200)
      .json(customResponse(200, "Payment deleted successfully", null));
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
  getAllPayment,
  getAllPaymentByOrganizer,
  getOnePayment,
  updatePayment,
  deletePayment,
};
