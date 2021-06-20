const mongoose = require("mongoose");
const { Schema } = mongoose;

var bankAccountVaultSchema = Schema({
  category: {
    type: String,
    ref: "category",
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  bank_name: {
    type: String,
    trim: true,
  },
  account_type: {
    type: String,
    trim: true,
  },
  account_number: {
    type: String,
    trim: true,
  },
  ifsc_code: {
    type: String,
    trim: true,
  },
  micr_code: {
    type: String,
    trim: true,
  },
  customer_id: {
    type: String,
    trim: true,
  },
});

module.exports = bankAccountVaultSchema;
