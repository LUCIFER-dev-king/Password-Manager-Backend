var express = require("express");
var router = express.Router();
const { signin, signup, signout, isSignedIn } = require("../controllers/auth");
const { check } = require("express-validator");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
