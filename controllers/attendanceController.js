const Attendance = require('../models/Attendance');


exports.getAttendance = async (req, res) => {
    try {
      const attendance = await Attendance.find();
      res.status(200).json(attendance);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.addAttendance = async (req, res) => {
    const { employeeId, status, department } = req.body;
  
    try {
      const attendance = await Attendance.create({ employeeId, status, department });
      res.status(201).json(attendance);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
