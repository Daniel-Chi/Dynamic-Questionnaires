const router = require("express").Router();
const questionRoutes = require("./question");
const flowchartRoutes = require("./flowcharts");
const answerRoutes = require("./answers");
const formRoutes = require("./forms");

// Routes
router.use("/question", questionRoutes);
router.use("/answers",answerRoutes);
router.use("/flowcharts",flowchartRoutes);
router.use("/forms", formRoutes);

module.exports = router;
