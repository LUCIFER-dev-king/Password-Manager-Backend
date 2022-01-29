const User = require("../models/user");
var expressJwt = require("express-jwt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const { verifyJwt, signJwt } = require("../utils/authUtils");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      params: errors.array()[0].param,
    });
  }
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

    const accessToken = signJwt(user._id);

    const refreshToken = signJwt(user._id);

    if (req.origin === "chrome-extension://kghinbmpijahclnknpehcnikkgkfpkle") {
      res.setHeader("set-cookie", [
        `accessToken=${newAccessToken}; SameSite=None; Secure`,
        `refreshToken=${refreshToken}; SameSite=None; Secure`,
      ]);
    } else {
      res.cookie("accessToken", accessToken, {
        maxAge: 120000,
        httpOnly: true,
        sameSite: "none",
        secure: "true",
      });
      res.cookie("refreshToken", refreshToken, {
        maxAge: 3.15e10,
        httpOnly: true,
        sameSite: "none",
        secure: "true",
      });
    }

    const { _id, name, email } = user;

    return res.json({
      user: {
        _id,
        name,
        email,
      },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.json({
    message: "Signout is success",
  });
};

exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
  algorithms: ["HS256"],
});

exports.isAuthenticated = (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;

  if (!accessToken) {
    //If accessToken is expired, check refreshToken is valid and not expired.
    const { payload: refresh } = verifyJwt(refreshToken);
    if (refresh) {
      const newAccessToken = signJwt(refresh._id);
      if (
        req.origin === "chrome-extension://kghinbmpijahclnknpehcnikkgkfpkle"
      ) {
        res.setHeader("set-cookie", [
          `accessToken=${newAccessToken}; SameSite=None; Secure`,
          `refreshToken=${refreshToken}; SameSite=None; Secure`,
        ]);
      } else {
        res.cookie("accessToken", newAccessToken, {
          maxAge: 120000,
          httpOnly: true,
        });
      }
      return next();
    }
    return res.status(403).json({
      error: "ACCESS IS NEEDED",
    });
  }

  //If accessToken is valid.
  const { payload } = verifyJwt(accessToken);
  if (payload) {
    return next();
  }

  return res.status(403).json({
    error: "ACCESS TOKEN IS INVALID",
  });
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(400).json({
      error: "You are not authroised",
    });
  }

  next();
};
