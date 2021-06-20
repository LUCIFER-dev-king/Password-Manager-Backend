const mongoose = require("mongoose");
const { Schema } = mongoose;

var addressVaultSchema = Schema({
  category: {
    type: String,
    ref: "category",
  },
  first_name: {
    type: String,
    trim: true,
  },
  last_name: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  dob: {
    type: String,
    trim: true,
  },
  address_1: {
    type: String,
    trim: true,
  },
  address_2: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  postal_code: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
});

module.exports = addressVaultSchema;
