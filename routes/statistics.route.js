const express = require("express");
const statisticsController = require("../controllers/statistics.controller");

const statisticsRouter = express.Router();

statisticsRouter.get("/all", statisticsController.getStatistics);
statisticsRouter.get("/intensity", statisticsController.getIntensity);
// statisticsRouter.get("/city", statisticsController.getCity);
statisticsRouter.get("/country", statisticsController.getCountry);
statisticsRouter.get("/likelihood", statisticsController.getLikelihood);
statisticsRouter.get("/region", statisticsController.getRegion);
statisticsRouter.get("/relevance", statisticsController.getRelevance);
statisticsRouter.get("/topics", statisticsController.getTopics);
// statisticsRouter.get("/year", statisticsController.getYear);
statisticsRouter.get("/end-year", statisticsController.getEndYear);
statisticsRouter.get("/sector", statisticsController.getSector);
statisticsRouter.get("/pestle", statisticsController.getPestle);
statisticsRouter.get("/source", statisticsController.getSource);

module.exports = statisticsRouter;
