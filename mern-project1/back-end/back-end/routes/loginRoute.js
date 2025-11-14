const express = require("express");
const router = express.Router();
const Controller = require("../controllers/RegisterController");
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/signupValidation");
const { signup, login } = require("../controllers/authController");

router.route("/").get(Controller.GetAllDetails).post(Controller.CreateDetails);

router.route("/signup").post(signupValidation, signup);
router.route("/login").post(loginValidation, login);
router.route("/product").post(login);
module.exports = router;
