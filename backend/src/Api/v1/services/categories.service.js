const { connectDb } = require("../../../../config/db");
const Categories = require("../models/categories.model");
const { ObjectId } = require("mongodb");

const getAll = async () => {
  try {
    return await Categories.find();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getById = async (id) => {
  try {
    return await Categories.findById({ _id: id });
  } catch (error) {
    console.error("Error fetching categories by id:", error);
    throw error;
  }
};

const create = async (request) => {
  try {
    const newCategories = new Categories({
      name: request.name,
      organizerId: request.organizerId,
    });
    return await newCategories.save();
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

const update = async (request, id) => {
  try {
    return await Categories.findByIdAndUpdate(
      id,
      {
        name: request.name,
        //   organizerId: request.organizerId,
      },
      { runValidators: true, new: true }
    );
  } catch (error) {
    console.error("Error updated category: ", error);
    throw error;
  }
};

const destroy = async (id) => {
  try {
    return await Categories.deleteOne({ _id: id });
  } catch (error) {
    console.error("Error delete category: ", error);
    throw error;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
};
