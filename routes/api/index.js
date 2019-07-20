const router = require("express").Router();
const questionRoutes = require("./question");
const flowchartRoutes = require("./flowcharts");
const answerRoutes = require("./answers");

// Routes
router.use(questionRoutes);
router.use(answerRoutes);
router.use(flowchartRoutes);

module.exports = router;
