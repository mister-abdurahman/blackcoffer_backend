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
    const data = await StatisticsModel.find({
      published: { $exists: true, $ne: "" },
    })
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
    const data = await StatisticsModel.find({
      published: { $exists: true, $ne: "" },
    })
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
    const data = await StatisticsModel.find({
      published: { $exists: true, $ne: "" },
    })
      .select("relevance published")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getCountry(req, res, next) {
  try {
    const data = await StatisticsModel.find({
      country: { $exists: true, $ne: "" },
    })
      .select("country intensity likelihood")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getTopics(req, res, next) {
  try {
    const data = await StatisticsModel.find({
      topic: { $exists: true, $ne: "" },
    })
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
    const data = await StatisticsModel.find({
      region: { $exists: true, $ne: "" },
    })
      .select("region intensity")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getEndYear(req, res, next) {
  try {
    const data = await StatisticsModel.find({
      end_year: { $exists: true, $ne: "" },
    })
      .select("end_year intensity")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getSector(req, res, next) {
  try {
    const data = await StatisticsModel.find({
      sector: { $exists: true, $ne: "" },
    })
      .select("sector relevance")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getPestle(req, res, next) {
  try {
    const data = await StatisticsModel.find({
      pestle: { $exists: true, $ne: "" },
    })
      .select("pestle relevance")
      .limit(20);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getSource(req, res, next) {
  try {
    const data = await StatisticsModel.find({
      source: { $exists: true, $ne: "" },
    })
      .select("source intensity relevance")
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
  getCountry,
  getLikelihood,
  getRegion,
  getRelevance,
  getTopics,
  getEndYear,
  getSector,
  getPestle,
  getSource,
};
