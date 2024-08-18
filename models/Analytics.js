const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  totalEmployees: Number,
  attritionCount: Number,
  attritionRate: Number,
  activeEmployees: Number,
  averageMonthlyIncome: [Number],
  performanceRating: [Number],
  satisfactionRatings: [
    {
      jobRole: String,
      rating: Number,
    },
  ],
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);
