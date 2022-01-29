const express = require("express");
const { isAuthenticated } = require("../controllers/auth");
const router = express.Router();
const {
  createNotesVault,
  deleteNotesVault,
  updateNotesVault,
} = require("../controllers/notesVault");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.put("/notes/create/:userId", isAuthenticated, createNotesVault);

router.put("/notes/update/:userId", isAuthenticated, updateNotesVault);

router.delete("/notes/remove/:userId", isAuthenticated, deleteNotesVault);

module.exports = router;
