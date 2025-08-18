const Employee = require("../models/employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body || {};
  const user = await Employee.findOne({ username });

  // handle request if required fields is missing
  if (!username && !password) {
    return res.status(400).json({
      msg: `username and password is required`,
      error: true,
    });
  }

  // check existing user
  if (!user) {
    return res.status(404).json({
      msg: `username with ${username} not found`,
      error: true,
    });
  }

  // check password
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({
      msg: `wrong password`,
      error: true,
    });
  }

  // create token
  const payload = {
    id: user._id,
    username: user.username,
    role: user.role,
  };
  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY, { expiresIn: "1h" });
  return res.status(200).json({
    msg: `login success, use token below to access the other endpoint`,
    id: user._id,
    username: user.username,
    role: user.role,
    token,
  });
};

module.exports = { login };
