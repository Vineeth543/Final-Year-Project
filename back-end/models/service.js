const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const schema = mongoose.Schema;

const serviceSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "farmer",
        "electricity",
        "housing",
        "student",
        "employment",
        "driving",
        "health",
        "police",
        "birth",
        "women",
        "labour",
        "citizen",
      ],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const service = mongoose.model("service", serviceSchema);
module.exports = service;
