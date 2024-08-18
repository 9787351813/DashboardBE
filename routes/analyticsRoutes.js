const express = require('express');
const Analytics = require('../models/Analytics');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Get analytics data
router.get('/', authenticate, async (req, res) => {
  try {
    const analyticsData = await Analytics.find({});
    res.json(analyticsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new analytics data
router.post('/', authenticate, async (req, res) => {
  try {
    const newAnalytics = new Analytics(req.body);
    await newAnalytics.save();
    res.status(201).json(newAnalytics);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
