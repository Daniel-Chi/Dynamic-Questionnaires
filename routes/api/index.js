const router = require("express").Router();
const questionRoutes = require("./question");
//const flowchartRoutes = require("./flowcharts");
const answerRoutes = require("./answers")
// Routes
router.use("/question", questionRoutes);
router.use("/answers",answerRoutes);
//router.use("/flowcharts",flowchartRoutes);

module.exports = router;
