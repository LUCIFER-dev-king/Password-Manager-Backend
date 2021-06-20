const PaymentCardVault = require("../models/paymentCardVault");

exports.createPaymentCardVault = (req, res) => {
  const user = req.profile;
  const paymentCardVault = req.body;

  user.payment_card_vault.push(paymentCardVault);

  user.save((err, result) => {
    if (!err) {
      return res.status(200).send(result);
    } else {
      return res.status(400).send(err.message);
    }
  });
};

exports.deletePaymentCardVault = (req, res) => {
  const user = req.profile;
  var paymentCardVault = req.body;

  user.payment_card_vault.id(paymentCardVault._id).remove((err, result) => {
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
