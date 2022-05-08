const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: maxAge,
  });
};

// Get user by ID
exports.get_userById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");
    res.status(200).json({
      status: "200",
      msg: "Get a user by ID",
      user,
    });
  } catch (err) {
    res.status(404).json({
      status: "404",
      msg: "User ID incorrect or not found.",
      errorMsg: err.message,
    });
  }
};

// Get all users
exports.get_allUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({
      status: "200",
      msg: "Get all users",
      users,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// Login user
exports.post_loginUser = async (req, res, next) => {
  const { email, password } = req.body.formData;

  try {
    const user = await User.find({ email });
    bcrypt.compare(password, user[0].password, function (err, result) {
      if (result === true) {
        const token = createToken(user._id);
        res
          .header("x-auth-token", token)
          .header("access-control-expose-headers", "x-auth-token")
          .header("Access-Control-Allow-Origin", "http://localhost:3000")
          .header("Access-Control-Allow-Credentials", true);
        res.cookie("jwt", token, {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
          ),
          secure: false,
          httpOnly: true,
        });
        res.status(200).json({
          status: "200",
          msg: "Successfully logged in.",
          token,
          data: {
            user,
          },
        });
      } else {
        res.status(401).json({
          status: "401",
          msg: "Wrong credentials! Try again.",
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// Register a user
exports.post_registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({
      status: "201",
      msg: "User created",
      user,
    });
  } catch (err) {
    console.error(err);
  }
};

// Patch user info
exports.patch_updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      status: "200",
      msg: "User information updated.",
      user,
    });
  } catch (err) {
    console.error(err);
  }
};
