const mongoose = require("mongoose");
const schema = mongoose.Schema;

const officialSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["PDO", "SECRETARY", "PRESIDENT"],
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const officials = mongoose.model("officials", officialSchema);

module.exports = officials;
