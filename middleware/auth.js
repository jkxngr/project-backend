const jwt = require("jsonwebtoken");
const { User } = require("../models");

const SECRET_KEY = "96a5cfae10a7c61bee9544ec0ffa8c953032fd8ae36d3463e0453965cd6c304b";

const authenticate = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Please authenticate." });
  }
};

const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: "Access denied." });
  }
  next();
};

module.exports = { authenticate, authorize };