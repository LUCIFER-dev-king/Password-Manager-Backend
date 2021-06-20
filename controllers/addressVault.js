const AddressVault = require("../models/addressVault");

exports.createAddressVault = (req, res) => {
  const user = req.profile;
  const addressVault = req.body;

  user.address_vault.push(addressVault);

  user.save((err, result) => {
    if (!err) {
      return res.status(200).send(result);
    } else {
      return res.status(400).send(err.message);
    }
  });
};

exports.deleteAddressVault = (req, res) => {
  const user = req.profile;
  var addressVault = req.body;

  user.address_vault.id(addressVault._id).remove((err, result) => {
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
