const db = require("../models");

// Defining methods for the flowchartController
module.exports = {
	//method uses user id to send array of JSON objects of all forms
	findAllForms: function (req, res) {
		db.User
			.findById(req.params.id)
			.populate("flowchartIds")
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err))
	},
	//method uses user id to create a form linked by id, sends JSON of new form
	createNewForm: function (req, res) {
		db.Flowcharts
			.create({
				name: req.body.name,
				userId: req.params.id
			})
			.then(data => {
				db.User
					.findByIdAndUpdate(req.params.id, {
						$push: { flowchartIds: data._id }
					})
					.then(() => res.json(data))
					.catch(err => res.status(422).json(err))
			})
			.catch(err => res.status(422).json(err))
	}
}