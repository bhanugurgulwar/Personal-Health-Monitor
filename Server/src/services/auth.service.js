// const httpStatus = require("http-status");
const httpStatus = require("http-status");
const userService = require("./user.service");
const ApiError = require("../utils/ApiError");
const User = require("../models/users.model");

const loginUserWithEmailAndPassword = async (userName, password) => {
      console.log("auth service",userName);
      const user = await userService.getUserByUserName(userName);
//   if (!user) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
//   }
  return await user
};

module.exports = { loginUserWithEmailAndPassword };
