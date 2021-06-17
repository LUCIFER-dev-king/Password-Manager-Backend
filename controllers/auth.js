const User = require("../models/user");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const { validationResult } = require("express-validator");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: `${err}Cant save user`,
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      params: errors.array()[0].param,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Oops! An error occured",
      });
    } else if (!user) {
      return res.status(400).json({
        err: "Email is invalid",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        err: "Email and password doesn't match",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    res.cookie("token", token, { expire: new Date() + 100 * 60 * 60 });

    const { _id, name, email, role } = user;

    return res.json({
      token,
      user: {
        _id,
        name,
        email,
        role,
      },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout is success",
  });
};

// exports.isSignedIn = expressJwt({
//   secret: process.env.SECRET,
//   userProperty: "auth",
// });

exports.isAuthenticated = (req, res, next) => {
  let checked = req.profile && req.auth && req.profile.id == req.auth.id;
  if (!checked) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(400).json({
      error: "You are not authroised",
    });
  }

  next();
};
