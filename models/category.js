const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 32,
      unique: true,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("category", categorySchema);
