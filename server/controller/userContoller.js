const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ Message: "Please provide your all information" });
    }
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      res.status(400).json({ Message: "This email already in use" });
    }
    let user = new User({
      name,
      email,
      password,
    });

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    user.password = hash;
    await user.save();
    res.status(200).json({ Message: "User create complete", user });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ Message: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(404).json({ Message: "Wrong password" });
    }

    const userToken = {
      name: user.name,
      email: user.email,
      password: user.password,
    };

    const token = jwt.sign(userToken, process.env.SECRETKEY);

    res.status(201).json({ Message: "Login successful", token });
  } catch (err) {
    console.log(err);
  }
};