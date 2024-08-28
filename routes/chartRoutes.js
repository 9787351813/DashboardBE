const express = require('express');
const router = express.Router();
const { getChartData } = require('../controllers/chartController');

// Route to get chart data
router.get('/chart', getChartData);

module.exports = router;
