const router = require("express").Router();
const flowchartController = require("../../controllers/flowchartController");


router.route("/api/flowcharts/?question=:id")
 .post(flowchartController.createNewAnswers);
 
 
router.route("/api/flowcharts/?question=:id")
 .get(flowchartController.findAllAnswers);


module.exports = router;