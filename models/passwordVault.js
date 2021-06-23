const mongoose = require("mongoose");
const { Schema } = mongoose;

var passwordVaultSchema = new Schema({
  category: {
    type: String,
    ref: "category",
  },
  url: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
    trim: true,
  },
  username: {
    type: String,
    // required: true,
    trim: true,
  },
  site_password: {
    type: String,
    // required: true,
  },
});

module.exports = passwordVaultSchema;
