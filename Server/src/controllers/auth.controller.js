// const httpStatus = require("http-status");
const { authService } = require('../services/');

// const User  = require("../models");



const register = async (req, res) => {
  const userbody = req.body;
  try {
    console.log(userbody);
    const user = await authService.createUser(userbody);
    console.log('user',user)
    res.status(201).json({user});
  } catch (error) {
    console.log(error)
    res.status(400).json({message:"user not registered"})
  }

};

const login = async(req,res) => {
  const loginBody = req.body;
  try {
    console.log(loginBody);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  register,
};
