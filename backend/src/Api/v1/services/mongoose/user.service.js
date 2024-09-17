const User = require("../../models/user.model");
const Organizer = require("../../models/organizer.model");
const { BadRequesError } = require("../../../../errors");

const createOrganizer = async (req) => {
  try {
    const { organizer, role, name, email, password, confirmPassword } =
      req.body;
    if (password !== confirmPassword) {
      throw new BadRequesError("Password and password confirmation not match ");
    }
    const result = await Organizer.create({ organizer });

    const users = await User.create({
      name,
      email,
      password,
      organizer: result._id,
      role,
    });
    delete users._doc.password;
    return users;
  } catch (error) {
    console.error("Error: ", error.message);
    throw error;
  }
};

module.exports = {
  createOrganizer,
};
