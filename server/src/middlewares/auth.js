const jwt = require("jsonwebtoken");
const util = require("util");
const ApiError = require("../utils/ApiError");

const verifyToken = async (req, res, next) => {
  const header = req.headers.authorization;
  let token;

  if (header && header.startsWith("Bearer")) {
    token = header.split(" ")[1];
  }

  if (!token) {
    new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate");
  }

  const decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  next();
};

module.exports = { verifyToken };
