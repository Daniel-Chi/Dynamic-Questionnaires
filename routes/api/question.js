const router = require("express").Router();
const questionController = require("../../controllers/questionController");

// Matches with "/api/books"
router.route("/question")
  .get(questionController.findAll)
  .post(answerController.create);
    console.log('made it here');
//Matches with "/api/books/:id"
router
  .route("/:id")
  .get(questionController.findById)
  .put(answerController.update)
  .delete(answerController.remove);

module.exports = router;
