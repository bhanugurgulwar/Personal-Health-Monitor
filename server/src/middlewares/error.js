const mongoose = require("mongoose");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

const errorHandler = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  if (process.env.NODE_ENV === "development") {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
      stack: error.stack,
      error: error,
    });
  } else if (process.env.NODE_ENV === "production") {
    if (error.isOperational) {
      res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
      });
    }
  } else {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
    });
  }
};

module.exports = {
  errorConverter,
  errorHandler,
};
