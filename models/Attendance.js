const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  employeeId: { type: Number, required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Late', 'On-time'], required: true },
  department: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
