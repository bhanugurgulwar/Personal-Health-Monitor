const httpStatus = require("http-status");

const { AuthService, UserService, TokenService } = require("../services");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync(async (req, res, next) => {
  const userBody = req.body;

  const user = await UserService.createUser(userBody);

  if (!user) {
    return next(new ApiError(httpStatus.BAD_REQUEST, "Error!"));
  }
  const { token, expires } = await TokenService.generateAuthToken(user);

  res.status(httpStatus.CREATED).json({
    token,
    data: user,
    expires,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { userName, password } = req.body;

  const user = await AuthService.loginWithUserNameAndPassword(
    userName,
    password
  );

  const { token, expires } = await TokenService.generateAuthToken(user);

  res.send({
    token,
    expires,
  });
});

module.exports = {
  register,
  login,
};
