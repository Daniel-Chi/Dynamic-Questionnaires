const router = require("express").Router();
const flowchartController = require("../../controllers/flowchartController");


router.route("/api/flowcharts/?user=:id")
 //.post(flowchartController.createNewAnswers);
 .post(flowchartController.createNewForm);
 
router.route("/api/flowcharts/?user=:id")
 .get(flowchartController.findAllForms);


module.exports = router;