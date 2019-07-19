const db = require("../models");

// Defining methods for the questionController
module.exports = {
	//method uses form id to send JSON of the form's first question
	findFirstQuestion: function (req, res) {
		if (req.isAuthenticated()){
			db.Flowcharts
				.findById(req.params.id)
				.populate("questionId")
				.then(data => res.json(data))
				.catch(err => res.status(422).json(err));
		} else {
			res.end();
		}
	},
	//method uses answer id to send JSON of the next question
	findNextQuestion: function (req, res) {
		if (req.isAuthenticated()){
			db.Answers
				.findById(req.params.id)
				.populate("nextQuestion")
				.then(data => res.json(data))
				.catch(err => res.status(422).json(err));
		} else {
			res.end();
		}
	},
	//method uses form id to create a question linked by _id, sends JSON of new question
	createFirstQuestion: function (req, res) {
		if (req.isAuthenticated()){
			db.Questions
				.create({
					name: req.body.name,
					parentFlowchartId: req.params.id
				})
				.then(data => {
					db.Flowcharts
						.findByIdAndUpdate(req.params.id, { questionId: data._id })
						.then(() => res.json(data))
						.catch(err => res.status(422).json(err))
				})
				.catch(err => res.status(422).json(err));
		} else {
			res.end();
		}
	},
	//method uses answer id to create a question linked by _id, sends JSON of new question
	createNextQuestion: function (req, res) {
		if (req.isAuthenticated()){
			db.Questions
				.create({
					name: req.body.name,
					parentAnswerId: req.params.id
				})
				.then(data => {
					db.Answers
						.findByIdAndUpdate(req.params.id, { nextQuestion: data._id })
						.then(() => res.json(data))
						.catch(err => res.status(422).json(err))
				})
				.catch(err => res.status(422).json(err));
		} else {
			res.end();
		}
	}
}
