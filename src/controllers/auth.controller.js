// USER AUTH (REGISTER & LOGIN)
// Auth Controller
// controllers/auth.controller.js
// BUSINESS LOGIC

const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
exports.register = async (req, res) => {
  console.log('Register Request...', req.body);
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    ...req.body,
    password: hashed,
  });
  console.log('User Created...');
  res.json(user);
};

// LOGIN
exports.login = async (req, res) => {
  console.log('Login Request...');
  const user = await User.findOne({ email: req.body.email });
  console.log('User not Found...');
  if (!user) {
    return res.status(400).json({ msg: 'User not Found' });
  }
  const match = await bcrypt.compare(req.body.password, user.password);
  console.log('Wrong Password...');
  if (!match) {
    return res.status(400).json({ msg: 'Wrong Password' });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  console.log('Login Success');
  res.json({ token });
};
