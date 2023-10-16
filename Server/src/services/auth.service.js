// const httpStatus = require("http-status");
const httpStatus = require("http-status");
const userService = require("./user.service");
const ApiError = require("../utils/ApiError");
const User = require("../models/users.model");

const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  }
  return await user.populate("_org", "name email");
};

module.exports = { loginUserWithEmailAndPassword };
