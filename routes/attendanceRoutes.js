const express = require('express');
const { getAttendance, addAttendance } = require('../controllers/attendanceController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.route('/').get(authenticate, getAttendance).post(authenticate, addAttendance);

module.exports = router;
