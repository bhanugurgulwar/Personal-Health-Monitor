const httpStatus = require("http-status");
const { authService, userService } = require("../services/index");
const ApiError = require("../utils/ApiError");

const User = require("../models");

const register = async (req, res) => {
  const userbody = req.body;
  try {
    const user = await userService.createUser(userbody);
    res.status(201).json({ user });
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, error);
  }
};

const login = async (req, res) => {
  const { userName, password } = req.body;
  const user = await authService.loginWithUserNameAndPassword(
    userName,
    password
  );
  try {
    res.send({
      user,
    });
  } catch (error) {}
};

module.exports = {
  register,
  login,
};
