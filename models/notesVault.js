const mongoose = require("mongoose");
const { Schema } = mongoose;

var notesVaultSchema = Schema({
  category: {
    type: String,
    ref: "category",
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = notesVaultSchema;
