const { User } = require("../models");

const createUser = (userBody) => {
  return User.create(userBody);
};

const getUsers = async (req, res) => {
  const users = await User.find();
  return users;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    email,
  });
  return user;
};

const getUserByUserName = async (userName) => {
  const user = await User.findOne({
    userName,
  }).select("+password");

  return user;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);

  return user;
};

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
  getUserByUserName,
  getUserById,
};
