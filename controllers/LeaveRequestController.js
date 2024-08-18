const Leave = require('../models/LeaveRequest');

exports.createLeave = async (req, res) => {
  const { type, startDate, endDate } = req.body;
  try {
    const leave = new Leave({ userId: req.user.id, type, startDate, endDate });
    await leave.save();
    res.status(201).json(leave);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({ userId: req.user.id });
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
