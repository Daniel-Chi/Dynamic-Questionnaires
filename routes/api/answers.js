const router = require("express").Router();
const answerController = require("../../controllers/answerController");



router.route("/api/answers/question/:id")
 .post(answerController.createNewAnswer);
 
 
router.route("/api/answers/question/:id")
 .get(answerController.findAllAnswers);




module.exports = router;