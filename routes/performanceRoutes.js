const express = require('express');
const router = express.Router();
const Performance = require('../models/Performance');
const authenticate = require('../middleware/authenticate');

// Get performance data
router.get('/performance', authenticate, async (req, res) => {
  try {
    const performance = await Performance.findOne();
    res.json(performance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Post performance data
router.post('/performance', authenticate, async (req, res) => {
  const { departmentPerformance, performanceOverTime, salaryDistribution, employees } = req.body;
  
  try {
    const performance = new Performance({
      departmentPerformance,
      performanceOverTime,
      salaryDistribution,
      employees
    });
    
    await performance.save();
    res.status(201).json(performance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
