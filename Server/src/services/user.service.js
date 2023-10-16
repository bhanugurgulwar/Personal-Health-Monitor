const User = require("../models/users.model");

const createUser = (userbody) => {
  return User.create(userbody);
};

const getUserByEmail = async (email) => {
  return User.findOne({
    email,
  });
};

const getUserByUserName = async (userName) => {
  console.log("uservice ",userName)
  return User.find({
    userName:userName
  }).populate();
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserByUserName,
};
