const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (user) => jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400); throw new Error('Please provide name, email and password');
  }
  const exists = await User.findOne({ email });
  if (exists) { res.status(400); throw new Error('User already exists'); }
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  res.status(201).json({ user: { id: user._id, name: user.name, email: user.email }, token: generateToken(user) });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) { res.status(400); throw new Error('Please provide email and password'); }
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    res.json({ user: { id: user._id, name: user.name, email: user.email }, token: generateToken(user) });
  } else {
    res.status(401); throw new Error('Invalid credentials');
  }
});
