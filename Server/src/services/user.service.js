const User = require("../models/users.model");

const createUser = (userbody) => {
  console.log(userbody);
  return User.create(userbody);
};

const getUserByEmail = async (email) => {
  return User.findOne({
    email,
  });
};

const getUserByUserName = async (userName) => {
  return User.find({
    userName: userName,
  }).populate();
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserByUserName,
};
