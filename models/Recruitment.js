// models/Candidate.js
const mongoose = require('mongoose');

const RecruitmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: String, required: true },
  source: { type: String, required: true },
  appliedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recruitment', RecruitmentSchema);
