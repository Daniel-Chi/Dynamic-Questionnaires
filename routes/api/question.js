const router = require("express").Router();
const questionController = require("../../controllers/questionController");

router.route("/api/question/?answer=:id")
  .post(questionController.createNextQuestion);

router.route("/api/question/?form=:id")
  .post(questionController.createFirstQuestion);

router.route("/api/question/?form=:id")
  .get(questionController.findFirstQuestion);

router.route("/api/question/?answer=:id")
  .get(questionController.findNextQuestion);

module.exports = router;
