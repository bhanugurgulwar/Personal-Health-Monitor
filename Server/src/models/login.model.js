const mongoose = require('mongoose');

const loginSchema = mongoose.Schema={
    username: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    }
}

const Login = mongoose.model('Login',loginSchema);

module.exports = Login;