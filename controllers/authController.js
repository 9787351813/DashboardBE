const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, password: hashedPassword });

    await newUser.save();

    const payload = { user: { id: newUser.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Debug: Output user details (excluding sensitive information)
    console.log('User found:', { email: user.email });

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password comparison failed');
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Server Error');
  }
};


const getUserProfile = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({
      _id: user._id,
      firstName: user.firstName,
      email: user.email,
    });
  } catch (error) {
    console.error('Error fetching user profile', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  register,
  login,
  getUserProfile,
};
