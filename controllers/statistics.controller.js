const StatisticsModel = require("../models/statistics.model");

async function getStatistics(req, res, next) {
  try {
    const data = await StatisticsModel.find();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = { getStatistics };
