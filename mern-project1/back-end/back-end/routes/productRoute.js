const express = require("express");
const router = express.Router();
const validToken = require("../middlewares/validToken");
const Data = require("../models/andeModel");

router.get("/", validToken, async (req, res, next) => {
  const { name, email } = await Data.findById(req.user.id);
  res.status(200).json([
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",

      price: 18900,
    },
  ]);
});

module.exports = router;
