const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const {
  createPaaswordVault,
  deletePaaswordVault,
} = require("../controllers/passwordVault");
const router = express.Router();
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.put(
  "/password/create/:userId",
  isSignedIn,
  isAuthenticated,
  createPaaswordVault
);

router.delete(
  "/password/remove/:userId",
  isSignedIn,
  isAuthenticated,
  deletePaaswordVault
);

module.exports = router;
