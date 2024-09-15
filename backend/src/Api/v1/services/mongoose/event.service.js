const { BadRequesError, NotFoundError } = require("../../../../errors");
const Event = require("../../models/event.model");
const { checkImage } = require("./image.service");
const { checkCategories } = require("./categories.service");
const { checkTalent, getById } = require("./talent.service");

const create = async (req) => {
  try {
    const {
      title,
      date,
      about,
      tagline,
      keyPoint,
      vanueName,
      statusEvent,
      tickets,
      image,
      categories,
      talent,
    } = req.body;

    // check image, categories, and talent
    await checkImage(image);
    await checkCategories(categories);
    await checkTalent(talent);

    // filter by title
    const checkByTitle = await Event.findOne({ title });
    if (checkByTitle) throw new BadRequesError("title already exists");
    // store
    const result = await Event.create({
      title,
      date,
      about,
      tagline,
      keyPoint,
      vanueName,
      statusEvent,
      tickets,
      image,
      categories,
      talent,
    });
    // return
    return result;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

const getAll = async (req) => {
  try {
    const { keyword, categories, talent } = req.query;
    let condition = {};

    if (keyword) {
      condition = { ...condition, title: { $regex: keyword, $options: "i" } };
    }

    if (categories) {
      condition = { ...categories, categories: categories };
    }

    if (talent) {
      condition = { ...talent, name: { $regex: talent, $options: "i" } };
    }

    const result = await Event.find(condition)
      .populate({
        path: "image",
        select: "_id name",
      })
      .populate({
        path: "categories",
        select: "_id name",
      })
      .populate({
        path: "talent",
        select: "_id name role image",
        populate: { path: "image_id", select: "_id name" },
      });

    return result;
  } catch (error) {
    console.error(`error retrived event: ${error}`);
    throw error;
  }
};

const getOneById = async (req) => {
  try {
    const id = req.params.id;
    const result = await Event.findOne({ _id: id })
      .populate({
        path: "image",
        select: "_id name",
      })
      .populate({
        path: "categories",
        select: "_id name",
      })
      .populate({
        path: "talent",
        select: "_id name role image",
        populate: { path: "image_id", select: "_id name" },
      });

    if (!result) throw new NotFoundError("Event not found");
    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (req) => {
  try {
    // check id
    await getOneById(req);
    // body
    const id = req.params.id;
    const {
      title,
      date,
      about,
      tagline,
      keyPoint,
      vanueName,
      statusEvent,
      tickets,
      image,
      categories,
      talent,
    } = req.body;
    // check image, categories, and talent
    await checkImage(image);
    await checkCategories(categories);
    await checkTalent(talent);

    // check event title
    const check = await Event.findOne({
      title,
      _id: { $ne: id },
    });
    if (check) throw new BadRequesError("title already exist");

    // update
    const result = await Event.findByIdAndUpdate(
      id,
      {
        title,
        date,
        about,
        tagline,
        keyPoint,
        vanueName,
        statusEvent,
        tickets,
        image,
        categories,
        talent,
      },
      { runValidators: true, new: true }
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const destroy = async (req) => {
  try {
    // data
    const id = req.params.id;
    const result = await Event.deleteOne({ _id: id });
    if (!result) throw new NotFoundError("Event not found");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  getAll,
  getOneById,
  update,
  destroy,
};
