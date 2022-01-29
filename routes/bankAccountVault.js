const express = require("express");
const { isAuthenticated } = require("../controllers/auth");
const {
  createBankAccountVault,
  deleteBankAccountVault,
  updateBankAccountVault,
} = require("../controllers/bankAccountVault");
const router = express.Router();
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.put(
  "/bankaccount/create/:userId",
  isAuthenticated,
  createBankAccountVault
);

router.put(
  "/bankaccount/update/:userId",
  isAuthenticated,
  updateBankAccountVault
);

router.delete(
  "/bankaccount/remove/:userId",
  isAuthenticated,
  deleteBankAccountVault
);

module.exports = router;
