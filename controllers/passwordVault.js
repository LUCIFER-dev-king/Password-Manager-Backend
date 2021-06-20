const PasswordVault = require("../models/passwordVault");
const User = require("../models/user");

exports.getPasswordVaultById = (req, res, next) => {
  //
};

exports.createPaaswordVault = (req, res) => {
  const user = req.profile;
  const passwordVault = req.body;

  user.password_vault.push(passwordVault);

  user.save((err, result) => {
    if (!err) {
      return res.status(200).send(result);
    } else {
      return res.status(400).send(err.message);
    }
  });
};

exports.deletePaaswordVault = (req, res) => {
  const user = req.profile;
  var passwordVault = req.body;

  user.password_vault.id(passwordVault._id).remove((err, result) => {
    if (err) {
      return res.status(400).send(err.message);
    }
  });

  user.save((saveerr, saveresult) => {
    if (!saveerr) {
      return res.status(200).send(saveresult);
    } else {
      return res.status(400).send(saveerr.message);
    }
  });
};
