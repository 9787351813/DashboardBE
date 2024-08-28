// controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({
      success: true,
      token,
      user: {
        firstName: user.firstName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid Credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid Credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({
      success: true,
      token,
      user: {
        firstName: user.firstName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error logging in', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const getUserProfile = async (req, res) => {
  try {
    // Since req.user is already the user document, we can use it directly
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
  registerUser,
  loginUser,
  getUserProfile,
};
