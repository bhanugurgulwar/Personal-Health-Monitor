const httpStatus = require("http-status");

const { AuthService, UserService, TokenService } = require("../services");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { User } = require("../models");

const register = catchAsync(async (req, res, next) => {
  const userBody = req.body;

  const user = await UserService.createUser(userBody);

  if (!user) {
    return next(new ApiError(httpStatus.BAD_REQUEST, "Error!"));
  }
  const { token, expires } = await TokenService.generateAuthToken(user);

  res.status(httpStatus.CREATED).json({
    token,
    data: user,
    expires,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await AuthService.login(email, password);

  const { token, expires } = await TokenService.generateAuthToken(user);

  res.send({
    token,
    expires,
  });
});

const self = catchAsync(async (req, res) => {
  const userId = req.userId;
  const user = await UserService.getUserById(userId);

  res.status(httpStatus.OK).send(user);
});

const verifyEmail = catchAsync(async (req, res) => {
  await AuthService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  self,
  verifyEmail,
};
