const jwt = require("jsonwebtoken");
const verify = require("jsonwebtoken/verify");

exports.signJwt = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET);
};

exports.verifyJwt = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    return { payload: decoded, expired: false };
  } catch (e) {
    return { payload: null, expired: "jwt expired" };
  }
};
