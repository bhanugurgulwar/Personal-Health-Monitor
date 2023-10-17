const express = require("express");
const routes = require("./src/routes/index");
const errorHandler = require("./src/middlewares/error");

const app = express();

app.use(express.json());

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;
