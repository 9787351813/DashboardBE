const Recruitment = require('../models/Recruitment');

exports.getrecruitment = async (req, res) => {
    try {
        const employees = await Recruitment.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addrecruitment = async (req, res) => {
    const employee = new Recruitment({
        name: req.body.name,
        position: req.body.position,
    });

    try {
        const newrecruitment = await employee.save();
        res.status(201).json(newrecruitment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleterecruitment = async (req, res) => {
    try {
        await Recruitment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Employee' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Rename this to updaterecruitment
exports.updaterecruitment = async (req, res) => {
    try {
        const employee = await Recruitment.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });

        // Update only specified fields
        if (req.body.status) employee.status = req.body.status;

        const updatedEmployee = await employee.save();
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

