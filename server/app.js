require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const eventsRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// cors handling
const allowlist = process.env.CORS_WHITELIST;
const corsOptionsDelegate = function (req, res) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  res(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));

app.use("/", eventsRouter);

module.exports = app;

// TODO: add lint
