const mongoose = require("mongoose");
const { Schema } = mongoose;

var passwordVaultSchema = new Schema({
  category: {
    type: String,
    ref: "category",
  },
  siteUrl: {
    type: String,
    required: true,
  },
  vaultName: {
    type: String,
    // required: true,
    trim: true,
  },
  siteUsername: {
    type: String,
    // required: true,
    trim: true,
  },
  sitePassword: {
    type: String,
    // required: true,
  },
});

module.exports = passwordVaultSchema;
