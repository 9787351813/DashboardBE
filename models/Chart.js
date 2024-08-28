const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Chart', chartSchema);
