const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const router = express.Router();
const {
  createAddressVault,
  deleteAddressVault,
} = require("../controllers/addressVault");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.put(
  "/address/create/:userId",
  isSignedIn,
  isAuthenticated,
  createAddressVault
);

router.delete(
  "/address/remove/:userId",
  isSignedIn,
  isAuthenticated,
  deleteAddressVault
);

module.exports = router;
