const PasswordVault = require("../models/passwordVault");
const User = require("../models/user");

exports.getPasswordVaultById = (req, res, next, id) => {
  const user = req.profile;
  var passwordVault = user.password_vault.id(id);

  if (passwordVault == null) {
    res.status(400).json({
      err: "Password not found",
    });
  }

  req.passwordVault = passwordVault;

  next();
};

exports.getPasswordVaultByUrl = (req, res) => {
  const user = req.profile;
  const { siteUrl } = req.body;
  var passwordVault = user.password_vault;

  const found = passwordVault.find((pass) => pass.siteUrl === siteUrl);

  if (found === undefined) {
    res.status(400).json({
      err: "Not found",
    });
  } else {
    res.status(200).json({
      password: found,
    });
  }
};

exports.getPasswordVaultByName = (req, res) => {
  const user = req.profile;
  const { vaultName } = req.body;
  var vaultArray = [];

  //TODO: Change to lowercase
  const passVaultArray = user.password_vault.filter((pass) =>
    pass.vaultName.includes(vaultName)
  );

  // const notesVaultArray = user.notes_vault.filter((notes) =>
  //   notes.vaultName.includes(vaultName)
  // );
  // console.log(user.notes_vault[0].vaultName);

  // vaultArray = passVaultArray.concat(notesVaultArray);

  if (passVaultArray.length === 0) {
    res.status(400).json({
      err: "Not found",
    });
  } else {
    res.status(200).json({
      passVaultArray,
    });
  }
};

exports.getAPasswordVault = (req, res) => {
  return res.json(req.passwordVault);
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

exports.updatePasswordVault = (req, res) => {
  const user = req.profile;
  var passwordVault = req.body;

  user.password_vault.id(passwordVault._id).remove();
  user.password_vault.push(passwordVault);

  user.save((saveerr, saveresult) => {
    if (!saveerr) {
      return res.status(200).send(saveresult);
    } else {
      return res.status(400).send(saveerr.message);
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
