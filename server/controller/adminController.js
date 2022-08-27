const User = require("../models/User");

exports.getAlluser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  try {
    let user = await User.findById(id);
    if (!user) {
      res.status(404).json({ Message: "User not found" });
    }
    user.role = role;
    await User.findByIdAndUpdate(id, user, { new: true });
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userdel = await User.findByIdAndDelete(id);
    res.status(203).json({ Message: "User delete Successful" });
  } catch (err) {
    console.log(err);
  }
};
