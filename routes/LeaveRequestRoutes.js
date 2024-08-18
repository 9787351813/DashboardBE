const express = require('express');
const { createLeave, getLeaves } = require('../controllers/LeaveRequestController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/', authenticate, createLeave);
router.get('/', authenticate, getLeaves);

module.exports = router;
