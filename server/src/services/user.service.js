const User = require("../models/users.model");

const createUser = (userbody) => {
  return User.create(userbody);
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
  });

  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserByUserName,
};
