// models/Performance.js
const mongoose = require('mongoose');

const PerformanceSchema = new mongoose.Schema({
    employeeName: {
        type: String,
        required: true,
    },
    goals: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    imageUrl: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Performance', PerformanceSchema);
