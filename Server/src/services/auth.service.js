// const httpStatus = require("http-status");
const User   = require('../models/users.model')


const createUser = (userbody) => {
    // if(User.isEmailTaken(userBody.email)){
    //     throw new ApiError(httpStatus.BAD_REQUEST, 'User already exists with this email');
    // }
    return  User.create(userbody);
}

module.exports = { createUser };