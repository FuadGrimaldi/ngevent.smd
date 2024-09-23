const orderService = require("../services/mongoose/order.service");
const { customResponse } = require("../../../helpers/responseHelpers");

const getAllOrders = async (req, res) => {
  try {
    const result = await orderService.getAllOrders(req);
    res.status(200).json(
      customResponse(200, "all orders retrieved successfully", {
        order: result.data,
        pages: result.pages,
        total: result.total,
      })
    );
  } catch (error) {
    console.log(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

module.exports = { getAllOrders };
