const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    images: [
      {
        location: { type: String, required: true },
      },
    ],
  },
  { timestamp: true }
);

const image = mongoose.model("images", imageSchema);
module.exports = image;
