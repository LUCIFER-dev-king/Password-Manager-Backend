const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const {
  createPaymentCardVault,
  deletePaymentCardVault,
} = require("../controllers/paymentCardVault");
const router = express.Router();
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.put(
  "/paymentcards/create/:userId",
  isSignedIn,
  isAuthenticated,
  createPaymentCardVault
);

router.delete(
  "/paymentcards/remove/:userId",
  isSignedIn,
  isAuthenticated,
  deletePaymentCardVault
);

module.exports = router;
