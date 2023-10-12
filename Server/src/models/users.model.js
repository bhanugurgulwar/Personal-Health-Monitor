const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
    },
    lastMame: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      // unique: true,
      // trim: true,
      // lowercase: true,
    },
    password: {
      type: String,
      // required: true,
      trim: true,
      minlength: 8,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
    mobile: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
