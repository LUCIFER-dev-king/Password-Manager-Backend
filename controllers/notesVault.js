const NotesVault = require("../models/notesVault");

exports.createNotesVault = (req, res) => {
  const user = req.profile;
  const notesVault = req.body;

  user.notes_vault.push(notesVault);

  user.save((err, result) => {
    if (!err) {
      return res.status(200).send(result);
    } else {
      return res.status(400).send(err.message);
    }
  });
};

exports.deleteNotesVault = (req, res) => {
  const user = req.profile;
  var notesVault = req.body;

  user.notes_vault.id(notesVault._id).remove((err, result) => {
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
