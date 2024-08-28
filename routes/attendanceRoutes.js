const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController'); // Adjust the path if needed

// Route to get counts of attendance statuses
router.get('/attendance/data', attendanceController.getAttendanceData);

// Route to fetch all attendance records
router.get('/attendance', attendanceController.getAttendance);

// Route to add a new attendance record
router.post('/attendance/add', attendanceController.addAttendance);

// Route to update an existing attendance record
router.put('/attendance/:id', attendanceController.updateAttendance);

// Route to delete an attendance record
router.delete('/attendance/:id', attendanceController.deleteAttendance);

module.exports = router;
