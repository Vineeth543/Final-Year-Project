const mongoose = require("mongoose");
const schema = mongoose.Schema;

const appliedTenderSchema = new schema(
  {
    user: {
      type: schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    tender: {
      type: schema.Types.ObjectId,
      ref: "tenders",
      required: true,
    },
    tendererName: {
      type: String,
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fax: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    bidAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["accepted", "rejected", "applied"],
      default: "applied",
    },
  },
  { timestamps: true }
);

const appliedTender = mongoose.model("appliedTenders", appliedTenderSchema);
module.exports = appliedTender;
