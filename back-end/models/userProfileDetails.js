const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userDetailsSchema = new schema(
  {
    userId: {
      type: schema.Types.ObjectId,
      ref: "users",
      required: true,
      unique: true,
    },
    fatherName: {
      type: String,
    },
    motherName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
    taluk: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userDetails = mongoose.model("userDetails", userDetailsSchema);
module.exports = userDetails;
