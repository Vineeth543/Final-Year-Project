const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const schema = mongoose.Schema;

const serviceCategorySchema = new schema(
  {
    eService: {
      type: schema.Types.ObjectId,
      ref: "eServices",
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const serviceCategory = mongoose.model(
  "service-category",
  serviceCategorySchema
);
module.exports = serviceCategory;
