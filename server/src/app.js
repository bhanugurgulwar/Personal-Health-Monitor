const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const ApiError = require("./utils/ApiError");
const errorHandler = require("./middlewares/error");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api", routes);

//default route
// Send back a 404 error for any unknown api request
app.all("*", (req, res, next) => {
  next(new ApiError(404, "Not found"));
});

app.use(errorHandler);

module.exports = app;
