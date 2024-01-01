const StatisticsModel = require("../models/statistics.model");

async function getStatistics(req, res, next) {
  try {
    const data = await StatisticsModel.find().limit(30);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getIntensity(req, res, next) {
  try {
    const data = await StatisticsModel.find()
      .select("intensity published")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getLikelihood(req, res, next) {
  try {
    const data = await StatisticsModel.find()
      .select("likelihood published")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getRelevance(req, res, next) {
  try {
    const data = await StatisticsModel.find()
      .select("relevance published")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getYear(req, res, next) {
  try {
    const data = await StatisticsModel.find()
      .select("added relevance")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getCountry(req, res, next) {
  try {
    const data = await StatisticsModel.find()
      .select("country intensity")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getTopics(req, res, next) {
  try {
    const data = await StatisticsModel.find()
      .select("topic relevance")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getRegion(req, res, next) {
  try {
    const data = await StatisticsModel.find()
      .select("region intensity")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getCity(req, res, next) {
  try {
    const data = await StatisticsModel.find()
      .select("intensity published")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = {
  getStatistics,
  getIntensity,
  getCity,
  getCountry,
  getLikelihood,
  getRegion,
  getRelevance,
  getTopics,
  getYear,
};
