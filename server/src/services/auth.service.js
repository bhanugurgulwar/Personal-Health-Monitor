// const httpStatus = require("http-status");
const httpStatus = require("http-status");
const userService = require("./user.service");
const ApiError = require("./../utils/ApiError");
const { TokenService } = require(".");

const login = async (email, password) => {
  const user = await userService.getUserByEmail(email);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exists!");
  }

  if (!(await user.isPasswordMatch(password, user.password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password does not match!");
  }

  return await user;
};

const verifyEmail = async (verifyEmailToken) => {
  // const abc = await TokenService.
};

module.exports = { login, verifyEmail };
