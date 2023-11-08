const { User } = require("../models");

const createUser = (userBody) => {
  return User.create(userBody);
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    email,
  });
  return user;
};

const getUserByUserName = async (userName) => {
  const user = await User.findOne({
    userName: userName,
  }).select("+password");

  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserByUserName,
};
