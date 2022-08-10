const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validator: validator.isEmail,
  },
  password: {
    type: String,
    default: true,
    minLength: 8,
  },
  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordtoken: String,
  resentPasswordexpire: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
