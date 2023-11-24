const jwt = require("jsonwebtoken");
const moment = require("moment");

const generateToken = (userId, expires, secret = process.env.JWT_SECRET_KEY) => {
  const payload = { id: userId, iat: moment().unix(), expires: expires.unix() };

  return jwt.sign(payload, secret);
};

const generateAuthToken = async (user) => {
  const tokenExpires = moment().add(
    process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    "minutes"
  );
  
  const accessToken = generateToken(user._id, tokenExpires);

  return {
    token: accessToken,
    expires: tokenExpires.toDate(),
  };
};

module.exports = { generateAuthToken };
