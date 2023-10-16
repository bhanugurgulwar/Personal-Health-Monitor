// const httpStatus = require("http-status");
const { authService, userService } = require("../services/index");
const ApiError = require("../utils/ApiError");

const User = require("../models");

const register = async (req, res) => {
  const userbody = req.body;
  try {
    console.log(userbody);
    const user = await userService.createUser(userbody);
    console.log("user", user);
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not registered" });
  }
};

const login = async (req, res) => {
  const { userName, password } = req.body;
  console.log("auth controller",req.body)
  const user = await authService.loginUserWithEmailAndPassword(userName, password);
  try {
    console.log("login controlller",user);
    res.send({        
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
};
