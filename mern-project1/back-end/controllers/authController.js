const Data = require("../models/andeModel");
const jwt = require("jsonwebtoken");

const jwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRE,
  });
};

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const response = await Data.findOne({ email });
    if (response) {
      return res.status(409).json({
        message: "User already exist, you can login ",
      });
    }
    // create and save the new user
    const user = await Data.create({ name, email, password });
    const token = jwtToken(user._id);

    res.status(201).json({
      status: "success",
      message: "Signup Success",
      token,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const response = await Data.findOne({ email }).select("+password");
    if (!response) {
      return res.status(409).json({
        message: "Incorrect email or password!!!",
      });
    }
    console.log(response.password, password);
    const isPasswordCorrect = await response.correctPassword(
      password,
      response.password
    );
    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      res.status(400).json({
        message: "incorrect email or password !!!",
      });
    }
    const token = jwtToken(response._id);
    res.status(201).json({
      status: "successfully loggedin",
      token,
      email,
      name: response.name,
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = {
  jwtToken,
  signup,
  login,
};
