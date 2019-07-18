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

//  router.route("/findallquestions")
//  .get(questionController.findAll)

router.route("/api/questions/?question=:id")
  .post(questionController.createNewQuestion);

router.route("/api/question/?form=:id")
  .post(questionController.createFirstQuestion);

// router.route("/api/questions/?question=:id")
//   .get(questionController.findAllQuestion);

router.route("/api/question/?form=:id")
  .get(questionController.findFirstQuestion);

router.route("/api/question/?answer=:id")
  .get(questionController.findNextQuestion);

module.exports = router;
