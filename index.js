const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(limiter);
app.use(helmet());
require("dotenv").config();

const statisticsRouter = require("./routes/statistics.route");

app.use("/statistics", statisticsRouter); //*

app.get("/", async (req, res) => {
  res.status(200).send("Welcome to the Visualization Dashboard");
});

app.get("*", async (req, res) => {
  res.status(404).send("This route does not exist");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ status: "Error !", message });
});

module.exports = app;
