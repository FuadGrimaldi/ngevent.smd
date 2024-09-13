const { connectDb } = require("../../../../db.js/db");
const { BadRequesError, NotFoundError } = require("../../../../errors");
const Categories = require("../../models/categories.model");
const { ObjectId } = require("mongodb");

const getAll = async () => {
  try {
    return await Categories.find();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getById = async (req) => {
  try {
    const id = req.params.id;
    const result = await Categories.findOne({ _id: id });
    if (!result) throw new NotFoundError("Categories not found");
    return result;
  } catch (error) {
    console.error("Error fetching categories by id:", error);
    throw error;
  }
};

const create = async (req) => {
  try {
    const { name } = req.body;
    const check = await Categories.findOne({ name });

    if (check) throw new BadRequesError("Categories name is exist");

    return await Categories.create({ name });
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

const update = async (req) => {
  try {
    // Tunggu hasil dari getById
    await getById(req);

    const id = req.params.id;
    const { name } = req.body; // Perbaikan destrukturisasi
    return await Categories.findByIdAndUpdate(
      id,
      {
        name: name,
      },
      { runValidators: true, new: true }
    );
  } catch (error) {
    console.error("Error updated category: ", error);
    throw error;
  }
};

const destroy = async (req) => {
  try {
    const id = req.params.id;
    const result = await Categories.deleteOne({ _id: id });
    if (!result) throw new NotFoundError("Categories not found");
    return result;
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
