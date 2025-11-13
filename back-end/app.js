const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
const loginRoute = require("./routes/loginRoute");
const productRouter = require("./routes/productRoute");
app.use("/api/v2/RegistrationForm", loginRoute);
app.use("/api/v2/product", productRouter);

module.exports = app;
