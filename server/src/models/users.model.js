const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const gender = ["male", "female"];

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "first name is required!"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "last name is required!"],
    },
    userName: {
      type: String,
      required: [true, "Username is required!"],
      unique: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: gender,
      required: true,
    },
    dob: {
      type: Date,
      // required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter valid email!"],
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      required: [true, "Password is required!"],
      select: false,
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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.isPasswordMatch = async function (reqPwd, dbPwd) {
  return await bcrypt.compare(reqPwd, dbPwd);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
