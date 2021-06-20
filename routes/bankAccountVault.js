const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const {
  createBankAccountVault,
  deleteBankAccountVault,
} = require("../controllers/bankAccountVault");
const router = express.Router();
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.put(
  "/bankaccount/create/:userId",
  isSignedIn,
  isAuthenticated,
  createBankAccountVault
);

router.delete(
  "/bankaccount/remove/:userId",
  isSignedIn,
  isAuthenticated,
  deleteBankAccountVault
);

module.exports = router;
