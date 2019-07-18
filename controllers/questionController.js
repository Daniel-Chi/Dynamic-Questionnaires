const db = require("../models");

// Defining methods for the questionController
console.log(db.Questions);
console.log(db.Answers);
console.log("-----------");
console.log(db)
module.exports = {
  findAll: function(req, res) {
     db.Questions
        .find()
        .populate("AnswerIds")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      
    
  },
  findOne: function(req, res) {
    db.Questions
       .find({name:req.params.questionID})
       .populate("AnswerIds")
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
     
   
 },
  create: function(req, res) {
    console.log(req.body);
    db.Questions
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
answer: function(req, res) {
  console.log(req.body);
 
    db.Answers.create(req.body)
    .then(function(answer) {
      // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Questions.findOneAndUpdate({"name": req.body.name}, { $push: { AnswerIds: answer._id } }, { new: true });
    })
    .then(function(dbUser) {
      // If the User was updated successfully, send it back to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
} 

};

//res.send("made it in questionController"+req.params.questionID);