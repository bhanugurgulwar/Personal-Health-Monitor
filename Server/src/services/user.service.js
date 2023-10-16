const User = require("../models/users.model");

const createUser = (userbody) => {
  return User.create(userbody);
};

const getUserByEmail = async (email) => {
  return User.findOne({
    email,
  });
};

module.exports = {
  getUserByEmail,
  createUser,
};
