const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const {
  createPaaswordVault,
  deletePaaswordVault,
  getPasswordVaultById,
  getAPasswordVault,
  updatePasswordVault,
  getPasswordVaultByUrl,
  getPasswordVaultByName,
} = require("../controllers/passwordVault");
const router = express.Router();
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);
router.param("passwordVaultId", getPasswordVaultById);

router.get(
  "/password/:userId/:passwordVaultId",
  isAuthenticated,
  getAPasswordVault
);

router.post("/password/:userId", isAuthenticated, getPasswordVaultByUrl);

router.post(
  "/password/search/:userId",
  isAuthenticated,
  getPasswordVaultByName
);

router.put("/password/create/:userId", isAuthenticated, createPaaswordVault);

router.put("/password/update/:userId", isAuthenticated, updatePasswordVault);

router.delete("/password/remove/:userId", isAuthenticated, deletePaaswordVault);

module.exports = router;
