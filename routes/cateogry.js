const express = require("express");
const { isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

router.post(
  "/category/create/:userId",
  isAuthenticated,
  isAdmin,
  createCategory
);

router.get("/categories", getAllCategories);
