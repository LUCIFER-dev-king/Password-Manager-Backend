var express = require("express");
var router = express.Router();
const { signin, signup, signout, isSignedIn } = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name should contain 5 letter"),
    check("email").isEmail().withMessage("Please enter your email properly"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password should be more than 5 letters"),
  ],
  signup
);
router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Please enter your email properly"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("password should be more than 5 letters"),
  ],
  signin
);
router.get("/signout", signout);

module.exports = router;
