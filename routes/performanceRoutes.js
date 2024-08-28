// routes/performanceRoutes.js
const express = require('express');
const router = express.Router();
const {
    getPerformances,
    addPerformance,
    updatePerformance,
    deletePerformance,
} = require('../controllers/performanceController');

// Get all performances
router.get('/', getPerformances);

// Add a new performance
router.post('/', addPerformance);

// Update an existing performance
router.put('/:id', updatePerformance);

router.delete('/:id', deletePerformance);

module.exports = router;
