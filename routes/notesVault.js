const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const router = express.Router();
const {
  createNotesVault,
  deleteNotesVault,
} = require("../controllers/notesVault");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.put(
  "/notes/create/:userId",
  isSignedIn,
  isAuthenticated,
  createNotesVault
);

router.delete(
  "/notes/remove/:userId",
  isSignedIn,
  isAuthenticated,
  deleteNotesVault
);

module.exports = router;
