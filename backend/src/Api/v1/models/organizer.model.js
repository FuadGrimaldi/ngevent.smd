const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizerSchema = new Schema(
  {
    organizer: {
      type: String,
      required: [true, "organizer is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organizer", organizerSchema);
