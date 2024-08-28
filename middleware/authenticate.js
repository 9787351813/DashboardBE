// middleware/authenticate.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user from payload to request object
      req.user = await User.findById(decoded.userId).select('-password');

      if (!req.user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      next();
    } catch (error) {
      console.error('Error with authentication middleware', error);
      res.status(401).json({ success: false, message: 'Not authorized' });
    }
  } else {
    res.status(401).json({ success: false, message: 'No token, authorization denied' });
  }
};

module.exports = protect;
