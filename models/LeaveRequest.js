const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ['Approved', 'Pending', 'Declined'], default: 'Pending' },
});

module.exports = mongoose.model('Leave', leaveSchema);
