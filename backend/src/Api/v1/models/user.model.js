const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "organizer", "owner"],
      default: "admin",
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);

usersSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next;
});

usersSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", usersSchema);
