const express = require("express");
const { isAuthenticated } = require("../controllers/auth");

const { getUserById, getUser } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);

router.get("/user/:userId", isAuthenticated, getUser);

module.exports = router;
