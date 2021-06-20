const mongoose = require("mongoose");
const { Schema } = mongoose;

var paymentCardVaultSchema = Schema({
  category: {
    type: String,
    ref: "category",
  },
  name: {
    type: String,
    trim: true,
    requied: true,
  },
  name_on_card: {
    type: String,
    trim: true,
  },
  card_type: {
    type: String,
    trim: true,
  },
  number: {
    type: String,
    trim: true,
  },
  cvv: {
    type: String,
    trim: true,
  },
  pin: {
    type: String,
    trim: true,
  },
  start_date: {
    type: String,
    trim: true,
  },
  expiry_date: {
    type: String,
    trim: true,
  },
});

module.exports = paymentCardVaultSchema;
