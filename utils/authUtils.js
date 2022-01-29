const jwt = require("jsonwebtoken");
const verify = require("jsonwebtoken/verify");

exports.signJwt = (id) => {
  return jwt.sign({ _id: id }, "passwordmanager");
};

exports.verifyJwt = (token) => {
  try {
    const decoded = jwt.verify(token, "passwordmanager");
    return { payload: decoded, expired: false };
  } catch (e) {
    return { payload: null, expired: "jwt expired" };
  }
};
