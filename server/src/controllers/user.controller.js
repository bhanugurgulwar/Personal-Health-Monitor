const httpStatus = require("http-status");

const { UserService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getUsers = catchAsync(async (req, res) => {
  const result = await UserService.getUsers(req, res);

  res.status(httpStatus.OK).send(result);
});


module.exports = { getUsers };
