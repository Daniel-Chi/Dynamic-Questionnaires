const router = require("express").Router();
const questionController = require("../../controllers/questionController");
//const answersController = require("../../controllers/answersController");
//Matches with "/api/books"
router.route("/:questionID")
  .get(questionController.findOne)

router.route("/seed")
 .post(questionController.create)
 
 router.route("/seed_answer")
 .post(questionController.answer) 

 router.route("/findallquestions")
 .get(questionController.findAll)


module.exports = router;
