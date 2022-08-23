const jwt = require("jsonwebtoken");
const User = require("../models/User");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(404).json({ Message: "Token not found" });
    }
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    const decodedEmail = decoded.email;
    const user = await User.findOne({ decodedEmail });
    if (!user) {
      return res.status(404).json({ Message: "Invalid token" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(404).json({ Message: "Invalid token" });
  }
};

module.exports = Authenticate;
