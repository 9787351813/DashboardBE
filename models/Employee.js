const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  personalInfo: { type: String, required: true },
  contactDetails: { type: String, required: true },
  jobRole: { type: String, required: true },
  department: { type: String, required: true },
  hireDate: { type: Date, required: true },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
