const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const PasswordVault = require("./passwordVault");
const NotesVault = require("./notesVault");
const BankAccountVault = require("./bankAccountVault");
const AddressVault = require("./addressVault");
const PaymentCardVault = require("./paymentCardVault");
const { Schema } = mongoose;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trime: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    encrypted_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      defaul: 0,
    },
    password_vault: [PasswordVault],
    notes_vault: [NotesVault],
    bank_account_vault: [BankAccountVault],
    address_vault: [AddressVault],
    payment_card_vault: [PaymentCardVault],
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encrypted_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (password) {
    return this.securePassword(password) === this.encrypted_password;
  },

  securePassword: function (password) {
    if (!password) {
      return "";
    }
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
