// controllers/leaveRequestController.js
const LeaveRequest = require('../models/LeaveRequest');

exports.getAllLeaves = async (req, res) => {
  try {
    const leaves = await LeaveRequest.find();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLeaveRequest = async (req, res) => {
  const { type, start, end, status } = req.body;

  try {
    const leaveRequest = new LeaveRequest({ type, start, end, status });
    await leaveRequest.save();
    res.status(201).json(leaveRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLeaveRequest = async (req, res) => {
  try {
    const leave = await LeaveRequest.findByIdAndDelete(req.params.id); // Use LeaveRequest here
    if (!leave) {
      return res.status(404).send('Leave request not found');
    }
    res.status(200).send('Leave request deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
