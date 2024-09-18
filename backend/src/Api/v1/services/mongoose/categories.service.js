const { BadRequesError, NotFoundError } = require("../../../../errors");
const Categories = require("../../models/categories.model");

const checkCategories = async (id) => {
  const result = await Categories.findOne({ _id: id });
  if (!result) throw new NotFoundError("image not found");
  return result;
};

const getAllByOrganizer = async (req) => {
  try {
    return await Categories.find({ organizer: req.user.organizer })
      .populate({
        path: "organizer",
        select: "organizer",
      })
      .select("_id name organizer");
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getAll = async () => {
  try {
    return await Categories.find().select("_id name organizer");
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getById = async (req) => {
  try {
    const id = req.params.id;
    const result = await Categories.findOne({
      _id: id,
      organizer: req.user.organizer,
    });
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

    return await Categories.create({ name, organizer: req.user.organizer });
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
    const result = await Categories.deleteOne({
      _id: id,
      organizer: req.user.organizer,
    });
    if (!result) throw new NotFoundError("Categories not found");
    return result;
  } catch (error) {
    console.error("Error delete category: ", error);
    throw error;
  }
};

module.exports = {
  getAll,
  getAllByOrganizer,
  getById,
  create,
  update,
  destroy,
  checkCategories,
};
