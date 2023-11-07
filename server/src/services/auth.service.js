// const httpStatus = require("http-status");
const httpStatus = require("http-status");
const userService = require("./user.service");
const ApiError = require("./../utils/ApiError");

const loginWithUserNameAndPassword = async (userName, password) => {
  const user = await userService.getUserByUserName(userName);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exists!");
  }

  if (!(await user.isPasswordMatch(password, user.password))) {
    throw new ApiError("Password does not match!", httpStatus.UNAUTHORIZED);
  }

  return await user;
};

module.exports = { loginWithUserNameAndPassword };
