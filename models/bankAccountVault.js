const mongoose = require("mongoose");
const { Schema } = mongoose;

var bankAccountVaultSchema = Schema({
  category: {
    type: String,
    ref: "category",
  },
  vaultName: {
    type: String,
    trim: true,
    required: true,
  },
  bankName: {
    type: String,
    trim: true,
  },
  accountType: {
    type: String,
    trim: true,
  },
  accountNumber: {
    type: String,
    trim: true,
  },
  ifsc_code: {
    type: String,
    trim: true,
  },
  micrCode: {
    type: String,
    trim: true,
  },
  customerId: {
    type: String,
    trim: true,
  },
});

module.exports = bankAccountVaultSchema;
