const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  type: String,  // e.g., 'project-status', 'attendance', 'payroll'
  data: Object,  // Data for the charts
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Report', reportSchema);
