// const httpStatus = require("http-status");
const httpStatus = require("http-status");
const userService = require("./user.service");
const AppError = require("./../utils/ApiError");

const loginWithUserNameAndPassword = async (userName, password) => {
  const user = await userService.getUserByUserName(userName);

  if (!user || !(await user.isPasswordMatch(password))) {
    throw new AppError("Invalid user", httpStatus.UNAUTHORIZED);
  }
  return await user;
};

module.exports = { loginWithUserNameAndPassword };
