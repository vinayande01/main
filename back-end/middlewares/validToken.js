const jwt = require("jsonwebtoken");

// Middleware to validate Bearer JWT in the Authorization header
const validToken = (req, res, next) => {
  const authHeader = req.headers && req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized, jwt is required1" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized, jwt is required2" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = validToken;
