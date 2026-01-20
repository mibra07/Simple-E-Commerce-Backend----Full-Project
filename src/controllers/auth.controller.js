// USER AUTH (REGISTER & LOGIN)
// Auth Controller
// controllers/auth.controller.js

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
