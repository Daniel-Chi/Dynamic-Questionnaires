const db = require("../models");

// Defining methods for the answerController
module.exports = {
  //method uses question id to send an array of JSON objects of its answers
  findAllAnswers: function (req, res) {
    db.Questions
      .findById(req.params.id)
      .populate("AnswerIds")
      
  },
  createNewAnswer: function (req, res) {

  },

  create: function (req, res) {
    console.log(req.body);
    db.Answers
      .create({ name: req.body.answer })
      //.populate("AnswerIds")
      .then(dbModel => {
        db.Questions.updateOne({ _id: req.params.id }, { $push: { AnswerIds: dbModel._id } })
      })
      .catch(err => res.status(422).json(err));
  }
};