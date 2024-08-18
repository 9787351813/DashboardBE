// routes/candidates.js
const express = require('express');
const Candidate = require('../models/Recruitment');
const router = express.Router();

// Middleware for authentication
const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Get all candidates
router.get('/', auth, async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a candidate
router.post('/', auth, async (req, res) => {
  const { name, position, status, source } = req.body;

  try {
    const candidate = new Candidate({ name, position, status, source });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
