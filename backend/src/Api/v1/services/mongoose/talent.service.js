const { BadRequesError, NotFoundError } = require("../../../../errors");
const Talents = require("../../models/talent.model");
const { checkImage } = require("./image.service");

const checkTalent = async (id) => {
  const result = await Talents.findOne({ _id: id });
  if (!result) throw new NotFoundError("talent not found");
  return result;
};

const getAll = async (req) => {
  try {
    const { keyword } = req.query;
    let condition = { organizer: req.user.organizer };

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
    const result = await Talents.findOne({
      _id: id,
      organizer: req.user.organizer,
    })
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
    const check = await Talents.findOne({
      name,
      organizer: req.user.organizer,
    });

    if (check) throw new BadRequesError("Talent in organizer is exist");

    return await Talents.create({
      name,
      role,
      image_id,
      organizer: req.user.organizer,
    });
  } catch (error) {
    console.error("Error creating talent:", error);
    throw error;
  }
};

const update = async (req) => {
  try {
    const id = req.params.id;
    const { name, role, image_id } = req.body;

    // check image
    await checkImage(image_id);

    // check talent name
    const check = await Talents.findOne({
      name,
      organizer: req.user.organizer,
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
        organizer: req.user.organizer,
      },
      { runValidators: true, new: true }
    );
    if (!result) throw new NotFoundError("Talent not found");
    return result;
  } catch (error) {
    console.error("Error updated talent by id:", error);
    throw error;
  }
};

const destroy = async (req) => {
  try {
    // data
    const id = req.params.id;
    const result = await Talents.deleteOne({
      _id: id,
      organizer: req.user.organizer,
    });
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
  checkTalent,
};
