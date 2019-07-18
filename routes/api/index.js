const router = require("express").Router();
const questionRoutes = require("./question");

// Routes
router.use("/question", questionRoutes);

module.exports = router;
