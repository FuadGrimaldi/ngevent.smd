const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const talentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "fieldname is required"],
    },
    role: {
      type: String,
      default: "-",
    },
    image_id: {
      type: mongoose.Types.ObjectId,
      ref: "image",
      required: true,
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Talent", talentSchema);
