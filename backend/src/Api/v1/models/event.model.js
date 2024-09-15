const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketCategoriesSchema = new Schema({
  type: {
    type: String,
    required: [true, "Ticket must be filled"],
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  statusTicketCategories: {
    type: Boolean,
    enum: [true, false],
    default: true,
  },
  expired: {
    type: Date,
  },
});

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "fieldname is required"],
      minlength: 3,
      maxlength: 50,
    },
    date: {
      type: Date,
      required: [true, "date and time must be filled in"],
    },
    about: {
      type: String,
    },
    tagline: {
      type: String,
      required: [true, "tagline is required"],
    },
    keyPoint: {
      type: [String],
    },
    vanueName: {
      type: String,
      required: [true, "vanueName is required"],
    },
    statusEvent: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },
    tickets: {
      type: [ticketCategoriesSchema],
      required: true,
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: "image",
      required: true,
    },
    categories: {
      type: mongoose.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
    talent: {
      type: mongoose.Types.ObjectId,
      ref: "Talent",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
