const express = require("express");
const statisticsController = require("../controllers/statistics.controller");

const statisticsRouter = express.Router();

statisticsRouter.get("/all", statisticsController.getStatistics);

module.exports = statisticsRouter;
