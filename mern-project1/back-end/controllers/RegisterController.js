const Data = require("../models/andeModel");
const { jwtToken } = require("./authController");

exports.GetAllDetails = async (req, res, next) => {
  const Getdata = await Data.find();
  try {
    res.status(200).json({
      status: "success",
      length: Getdata.length,
      data: {
        Getdata,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.CreateDetails = async (req, res, next) => {
  const data = await Data.create(req.body);
  const token = jwtToken(data._id);

  try {
    res.status(201).json({
      status: "success sended data into DB",
      token,
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
