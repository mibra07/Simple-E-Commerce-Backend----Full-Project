// Auth Middleware
// middleware/auth.middleware.js

const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  console.log('Auth Middleware');
  const token = req.headers.authorization?.split(' ')[1];
  console.log('Headers:', req.headers);
  if (!token) {
    return res.status(401).json({ msg: 'No Token' });
  }
  req.user = jwt.verify(token, process.env.JWT_SECRET);
  next();
};
