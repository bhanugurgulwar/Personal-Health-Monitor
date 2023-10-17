const httpStatus = require("http-status");
const { authService, userService } = require("../services/index");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const User = require("../models");

const register = catchAsync(async (req, res, next) => {
  const userbody = req.body;

  const user = await userService.createUser(userbody);
  if (!user) {
    return next(new ApiError(httpStatus.BAD_REQUEST, error));
  }
  res.status(httpStatus.CREATED).send(user);
});

const login = catchAsync(async (req, res, next) => {
  const { userName, password } = req.body;

  const user = await authService.loginWithUserNameAndPassword(
    userName,
    password
  );
  res.send({
    user,
  });
});

module.exports = {
  register,
  login,
};
