const router = require("express").Router();
const answerController = require("../../controllers/answerController");



router.route("/api/answers/?question=:id")
 .post(answerController.create); 






module.exports = router;