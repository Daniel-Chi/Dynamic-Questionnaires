const db = require("../models");

// Defining methods for the questionController

module.exports = {
  findAll: function (req, res) {
    db.Questions
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    // res.send("made it in questionController"+req.params.questionID);

  },
  create: function (req, res) {
    console.log(req.body);
    db.Questions
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

//res.send("made it in questionController"+req.params.questionID);