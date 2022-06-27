const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const schema = mongoose.Schema;

const servicesSchema = new schema(
  {
    serviceCategory: {
      type: schema.Types.ObjectId,
      ref : 'service-categories',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
    },
    documents: {
      type: Array,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const services = mongoose.model("services", servicesSchema);
module.exports = services;
