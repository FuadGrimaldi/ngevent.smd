const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, "type is required"],
      minlength: 3,
      maxlength: 50,
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: "image",
      required: true,
    },
    status: {
      type: Boolean,
      enum: [true, false],
      default: true,
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
