const { BadRequesError, NotFoundError } = require("../../../../errors");
const mongoose = require("mongoose");
const Talents = require("../../models/talent.model");
const { checkImage } = require("./image.service");

const getAll = async (req) => {
  try {
    const { keyword } = req.query;
    let condition = {};

    if (keyword) {
      condition = { ...condition, name: { $regex: keyword, $options: "i" } };
    }

    const result = await Talents.find(condition)
      .populate({
        path: "image_id",
        select: "_id name",
      })
      .select("_id name role image_id");

    return result;
  } catch (error) {
    console.error("Error fetching talent:", error);
    throw error;
  }
};

const getById = async (req) => {
  try {
    const id = req.params.id;
    const result = await Talents.findOne({ _id: id })
      .populate({
        path: "image_id",
        select: "_id name",
      })
      .select("_id name role image_id");
    if (!result) throw new NotFoundError("Talent not found");
    return result;
  } catch (error) {
    console.error("Error fetching talent by id:", error);
    throw error;
  }
};

const create = async (req) => {
  try {
    const { name, role, image_id } = req.body;
    // check image
    await checkImage(image_id);
    // check talent
    const check = await Talents.findOne({ name });

    if (check) throw new BadRequesError("Talent name is exist");

    return await Talents.create({ name, role, image_id });
  } catch (error) {
    console.error("Error creating talent:", error);
    throw error;
  }
};

const update = async (req) => {
  try {
    // check id
    await getById(req);

    const id = req.params.id;
    const { name, role, image_id } = req.body;

    // check image
    await checkImage(image_id);

    // check talent name
    const check = await Talents.findOne({
      name,
      _id: { $ne: id },
    });
    if (check) throw new BadRequesError("Talent name is exist");

    // update
    const result = await Talents.findByIdAndUpdate(
      id,
      {
        name: name,
        role: role,
        image_id: image_id,
      },
      { runValidators: true, new: true }
    );
    return result;
  } catch (error) {
    console.error("Error updated talent by id:", error);
    throw error;
  }
};

const destroy = async (req) => {
  try {
    // check id
    await getById(req);
    // data
    const id = req.params.id;
    const result = await Talents.deleteOne({ _id: id });
    if (!result) throw new NotFoundError("Talent not found");
    return result;
  } catch (error) {
    console.error("Error delete talent: ", error);
    throw error;
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
};
