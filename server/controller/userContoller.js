const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { name, email, passowrd } = req.body;
  try {
    let user = new User({
      name,
      email,
      passowrd,
    });

    let salt = await bcrypt.genSalt(10);

    let hash = await bcrypt.hash(user.passowrd, salt);
    user.passowrd = hash;
    await user.save();
    console.log(user);
    res.status(200).json({ Message: "User create complete", user });
  } catch (err) {
    console.log(err);
  }
};
