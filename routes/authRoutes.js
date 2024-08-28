// routes/authRoutes.js

const express = require('express');
const { register, login, getUserProfile } = require('../controllers/authController');
const protect = require('../middleware/authenticate'); // Ensure this path is correct

const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getUserProfile);

module.exports = router;


