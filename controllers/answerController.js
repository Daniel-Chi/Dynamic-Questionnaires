const db = require("../models");

// Defining methods for the answerController
module.exports = {
	//method uses question id to send an array of JSON objects of its answers
	findAllAnswers: function (req, res) {
		db.Questions
			.findById(req.params.id)
			.populate("answerIds")
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err))
	},
	//method uses question id to create a child answer linked by _id, sends JSON of new answer
	createNewAnswer: function (req, res) {
		db.Answers
			.create({
				name: req.body.name,
				answerType: req.body.answerType,
				parentQuestionId: req.params.id
			})
			.then(data => {
				db.Questions
					.findByIdAndUpdate(req.params.id, {
						$push: { answerIds: data._id }
					})
					.then(() => res.json(data))
					.catch(err => res.status(422).json(err))
			})
			.catch(err => res.status(422).json(err))
	}
};