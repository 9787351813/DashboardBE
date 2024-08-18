const mongoose = require('mongoose');

const PerformanceSchema = new mongoose.Schema({
  departmentPerformance: {
    type: [Number],
    required: true,
  },
  performanceOverTime: {
    type: [Number],
    required: true,
  },
  salaryDistribution: {
    type: [Number],
    required: true,
  },
  employees: [{
    name: String,
    percentage: String,
    avatar: String,
    colorClass: String,
  }],
});

module.exports = mongoose.model('Performance', PerformanceSchema);
