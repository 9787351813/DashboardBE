const Employee = require('../models/Employee');
const LeaveRequest = require('../models/LeaveRequest');
const Attendance = require('../models/Attendance');

exports.getmainData = async (req, res) => {
    try {
        const totalEmployees = await Employee.countDocuments();
        const totalLeaveRequests = await LeaveRequest.countDocuments();
       const totalAttendance = await Attendance.countDocuments();
        
        res.json({ totalEmployees, totalLeaveRequests, totalAttendance });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
    
};
