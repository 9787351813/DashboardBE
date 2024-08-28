// routes/leaveRequests.js
const express = require('express');
const router = express.Router();
const leaveRequestController = require('../controllers/LeaveRequestController');

router.get('/', leaveRequestController.getAllLeaves);
router.post('/', leaveRequestController.createLeaveRequest);
router.delete('/:id', leaveRequestController.deleteLeaveRequest);

module.exports = router;
