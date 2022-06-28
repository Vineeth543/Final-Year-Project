const mongoose = require("mongoose");
const schema = mongoose.Schema;

const eventSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    photos: {
      type: schema.Types.ObjectId,
      ref: "images",
    },
    description: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const event = mongoose.model("events", eventSchema);
module.exports = event;
