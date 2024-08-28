const mongoose = require('mongoose');

const recruitmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Recruitment', recruitmentSchema);
