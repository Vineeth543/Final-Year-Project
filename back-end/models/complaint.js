const mongoose = require("mongoose");
const schema = mongoose.Schema;

const complaintSchema = new schema(
  {
    user: {
      type: schema.Types.ObjectId,
      ref: "users",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["normal", "average", "high"],
      default: "normal",
    },
    remarks: {
      type: String,
      default: "NA",
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: ["new", "processing", "resolved", "rejected"],
      default: "new",
    },
  },
  { timestamps: true }
);

const complaint = mongoose.model("complaints", complaintSchema);
module.exports = complaint;
