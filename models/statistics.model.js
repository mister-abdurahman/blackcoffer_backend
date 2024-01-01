const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statisticsSchema = new Schema(
  {
    end_year: { type: String },
    intensity: { type: Number },
    sector: { type: String },
    topic: { type: String },
    insight: { type: String },
    url: { type: String },
    region: { type: String },
    start_year: { type: String, default: "" },
    impact: { type: String, default: "" },
    added: { type: String, default: "" },
    published: { type: String, default: "" },
    country: { type: String, default: "" },
    relevance: { type: Number },
    pestle: { type: String, default: "" },
    source: { type: String, default: "" },
    title: { type: String, default: "" },
    likelihood: { type: Number },
  },
  {
    collection: "dashboard-data",
  }
);

module.exports = mongoose.model("dashboard-data", statisticsSchema);
