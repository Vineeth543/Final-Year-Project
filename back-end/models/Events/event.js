const mongoose = require("mongoose");
const schema = mongoose.Schema;

const eventSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      enum: ["live", "upcoming", "past"],
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    poster: {
      type: String,
    },
  },
  { timestamps: true }
);

const event = mongoose.model("events", eventSchema);
module.exports = event;
