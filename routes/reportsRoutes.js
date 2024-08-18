const express = require('express');
const router = express.Router();
const Report = require('../models/Reports');

// Fetch Reports Data
router.get('/', async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Example: Create a Report Entry (for testing)
router.post('/', async (req, res) => {
  const report = new Report({
    type: req.body.type,
    data: req.body.data,
  });

  try {
    const newReport = await report.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
