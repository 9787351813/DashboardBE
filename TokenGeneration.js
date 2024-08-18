const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Example usage
const token = generateAccessToken({ id: 'userId', role: 'userRole' });
