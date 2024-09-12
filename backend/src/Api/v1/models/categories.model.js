const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // organizerId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Organizers",
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", categorySchema);
