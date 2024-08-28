const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
   
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    staff: {
        type: String,  // Assuming 'staff' should be a string (e.g., name or ID)
        required: true
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
