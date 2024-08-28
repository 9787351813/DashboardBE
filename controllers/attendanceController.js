
const Attendance = require('../models/Attendance');

// Get counts of attendance statuses
exports.getAttendanceData = async (req, res) => {
  try {
    const attendanceCounts = await Attendance.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    const attendanceData = {
      present: 0,
      absent: 0,
      late: 0,
    };

    attendanceCounts.forEach((item) => {
      attendanceData[item._id.toLowerCase()] = item.count;
    });

    res.json(attendanceData);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch all attendance records
exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a new attendance record
exports.addAttendance = async (req, res) => {
  try {
    const { date, status, staff } = req.body;

    // Basic validation
    if (!date || !status || !staff) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newAttendance = new Attendance({ date, status, staff });
    await newAttendance.save();
    res.status(201).json(newAttendance);
  } catch (error) {
    console.error('Error adding attendance:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing attendance record
exports.updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedAttendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }
    res.json(updatedAttendance);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an attendance record
exports.deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Attendance.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }
    res.json({ message: 'Attendance record deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
