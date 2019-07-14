const router = require("express").Router();
const questionController = require("../../controllers/questionController");
const answersController = require("../../controllers/answersController");
//Matches with "/api/books"
router.route("/:questionID")
  .get(questionController.findAll)

router.route("/seed")
 .post(questionController.create) 

module.exports = router;