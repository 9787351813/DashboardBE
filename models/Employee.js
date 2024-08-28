// models/Employee.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  personalInfo: { type: String },
  contactDetails: { type: String },
  jobRole: { type: String },
  department: { type: String },
  hireDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);
