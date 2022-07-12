const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemeSchema = new schema(
  {
    category: {
      type: schema.Types.ObjectId,
      ref: "schemeCategory",
    },
    title: {
      type: String,
      required: true,
    },
    objective: {
      type: String,
      required: true,
    },
    benefits: {
      type: Array,
      required: true,
    },
    eligibility: {
      type: String,
      required: true,
    },
    howToApply: {
      type: String,
      required: true,
    },
    applicationLink: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const schemes = mongoose.model("schemes", schemeSchema);
module.exports = schemes;
