const db = require("../models");

// Defining methods for the questionController
module.exports = {
  //method uses form id to send JSON of the form's first question
  findFirstQuestion: function (req, res) {
    db.Flowcharts
      .findById(req.params.id)
      .populate("questionId")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //method uses answer id to send JSON of the next question
  findNextQuestion: function (req, res) {
    db.Answers
      .findById(req.params.id)
      .populate("nextQuestion")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //method uses form id to create a question linked by _id, sends JSON of new question
  createFirstQuestion: function (req, res) {
    db.Questions
      .create({
        name: req.body.name,
        parentFlowchartId: req.params.id
      })
      .then(dbModel => {
        db.Flowcharts.findByIdAndUpdate(req.params.id, { questionId: dbModel._id })
          .then(() => res.json(dbModel))
          .catch(err => res.status(422).json(err))
      })
      .catch(err => res.status(422).json(err));
  },
  //method uses answer id to create a question linked by _id, sends JSON of new question
  createNextQuestion: function (req, res) {
    db.Questions
      .create({
        name: req.body.name,
        parentAnswerId: req.params.id
      })
      .then(dbModel => {
        db.Answers.findByIdAndUpdate(req.params.id, { nextQuestion: dbModel._id })
          .then(() => res.json(dbModel))
          .catch(err => res.status(422).json(err))
      })
      .catch(err => res.status(422).json(err));
  }
}