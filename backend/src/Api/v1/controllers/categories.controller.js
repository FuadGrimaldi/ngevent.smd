const categoriesService = require("../services/mongoose/categories.service");
const mongoose = require("mongoose");
const { customResponse } = require("../../../helpers/responseHelpers");

const getAllCategories = async (req, res) => {
  try {
    const data = await categoriesService.getAll();
    res
      .status(200)
      .json(customResponse(200, "Users retrieved successfully", data));
  } catch (error) {
    console.log(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const getCategoriesById = async (req, res) => {
  try {
    const data = await categoriesService.getById(req);
    res
      .status(200)
      .json(customResponse(200, "Users retrieved successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const createCategories = async (req, res) => {
  try {
    const data = await categoriesService.create(req);
    res
      .status(201)
      .json(customResponse(201, "Categories created successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const updateCategories = async (req, res) => {
  try {
    const data = await categoriesService.update(req);
    if (!data) {
      return res
        .status(404)
        .json(customResponse(404, "Categories not found", null));
    }
    res
      .status(200)
      .json(customResponse(200, "Categories update successfully", data));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

const deletedCategories = async (req, res) => {
  try {
    const data = await categoriesService.destroy(req);
    if (!data) {
      return res
        .status(404)
        .json(customResponse(404, "Categories not found", null));
    }
    res
      .status(200)
      .json(customResponse(200, "categories delete successfully", null));
  } catch (error) {
    console.error(error);
    // Return proper error response with error handler
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Internal Server Error";
    res.status(statusCode).json(customResponse(statusCode, errorMessage, null));
  }
};

module.exports = {
  getAllCategories,
  createCategories,
  getCategoriesById,
  updateCategories,
  deletedCategories,
};
