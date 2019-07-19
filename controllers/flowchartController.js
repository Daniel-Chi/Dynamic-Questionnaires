const db = require("../models");

// Defining methods for the flowchartController
module.exports = {
	//method uses user id to send array of JSON objects of all forms
	findAllForms: function (req, res) {
		if (req.isAuthenticated()) {
			db.User
				.findById(req.params.id)
				.populate("flowchartIds")
				.exec((err, data) => {
					if (err) {
						res.status(422).json(err)
					} else {
						res.send(data)
					}
				})
		} else {
			res.end();
		}
	},
	//method uses user id to create a form linked by id, sends JSON of new form
	createNewForm: function (req, res) {
		if (req.isAuthenticated()) {
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
						.exec((err) => {
							if (err) {
								res.status(422).json(err)
							} else {
								res.send(data._id)
							}
						})
				})
				.catch(err => res.status(422).json(err));
		} else {
			res.end();
		}
	}
}