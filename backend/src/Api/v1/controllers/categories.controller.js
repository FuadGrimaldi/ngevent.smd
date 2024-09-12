const categoriesService = require("../services/categories.service");
const mongoose = require("mongoose");
const { customResponse } = require("../helpers/responseHelpers");

const getAllCategories = async (req, res) => {
  try {
    const data = await categoriesService.getAll();
    res
      .status(200)
      .json(customResponse(200, "Users retrieved successfully", data));
  } catch (error) {
    console.log(error);
    res.status(500).json(customResponse(500, "Internal server error", null));
  }
};

const getCategoriesById = async (req, res) => {
  try {
    let id = req.params.id;
    // Cek apakah ID valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json(customResponse(400, "Invalid ID format", null));
    }
    const data = await categoriesService.getById(id);
    if (!data) {
      return res
        .status(404)
        .json(customResponse(404, "Categories not found", null));
    }
    res
      .status(200)
      .json(customResponse(200, "Users retrieved successfully", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(customResponse(500, error.message, null));
  }
};

const createCategories = async (req, res) => {
  try {
    const request = req.body;
    const data = await categoriesService.create(request);
    res
      .status(201)
      .json(customResponse(201, "Categories created successfully", data));
  } catch (error) {
    console.log(error);
    res.status(500).json(customResponse(500, error, null));
  }
};

const updateCategories = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json(customResponse(400, "Invalid ID format", null));
    }
    const request = req.body;
    const data = await categoriesService.update(request, id);
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
    res.status(500).json(customResponse(500, error, null));
  }
};

const deletedCategories = async (req, res) => {
  try {
    const id = req.params.id;
    // Cek apakah ID valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json(customResponse(400, "Invalid ID format", null));
    }
    const data = await categoriesService.deleted(id);
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
    res.status(500).json(customResponse(500, error, null));
  }
};

module.exports = {
  getAllCategories,
  createCategories,
  getCategoriesById,
  updateCategories,
  deletedCategories,
};
