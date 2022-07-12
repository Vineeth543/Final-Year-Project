const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemeCategorySchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const schemeCategory = mongoose.model("schemeCategory", schemeCategorySchema);
module.exports = schemeCategory;
