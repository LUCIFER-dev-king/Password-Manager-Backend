const BankAccountVault = require("../models/bankAccountVault");

exports.createBankAccountVault = (req, res) => {
  const user = req.profile;
  const bankAccountVault = req.body;

  user.bank_account_vault.push(bankAccountVault);

  user.save((err, result) => {
    if (!err) {
      return res.status(200).send(result);
    } else {
      return res.status(400).send(err.message);
    }
  });
};

exports.deleteBankAccountVault = (req, res) => {
  const user = req.profile;
  var bankAccountVault = req.body;

  user.bank_account_vault.id(bankAccountVault._id).remove((err, result) => {
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
