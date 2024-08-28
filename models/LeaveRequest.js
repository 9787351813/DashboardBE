// models/LeaveRequest.js
const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  type: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Declined'], default: 'Pending' },
});

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);
