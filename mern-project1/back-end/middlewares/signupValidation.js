const joi = require("joi");

const signupValidation = (req, res, next) => {
  const model = joi.object({
    name: joi.string().max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).max(20).required(),
  });

  const { error } = model.validate(req.body);

  if (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
    return; // stop the request cycle when validation fails
  }
  next();
};

const loginValidation = (req, res, next) => {
  const model = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).max(20).required(),
  });

  const { error } = model.validate(req.body);

  if (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
    return; // stop the request cycle when validation fails
  }
  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};
