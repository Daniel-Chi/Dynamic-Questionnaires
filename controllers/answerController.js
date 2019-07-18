const db = require("../models");

// Defining methods for the answerController
console.log(db.Answers);

module.exports = {

create: function(req, res) {
    console.log(req.body); 
    db.Answers
      .create({name:req.body.answer})
       //.populate("AnswerIds")
       .then(dbModel => {
        db.Questions.updateOne({_id:req.params.id},{$push: {AnswerIds:dbModel._id}})
       })
       .catch(err => res.status(422).json(err));
} };