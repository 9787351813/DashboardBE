// controllers/performanceController.js
const Performance = require('../models/Performance');

// Get all performances
exports.getPerformances = async (req, res) => {
    try {
        const performances = await Performance.find();
        res.json(performances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new performance
exports.addPerformance = async (req, res) => {
    const performance = new Performance({
        employeeName: req.body.employeeName,
        goals: req.body.goals,
        feedback: req.body.feedback,
        rating: req.body.rating,
        date: req.body.date,
        imageUrl: req.body.imageUrl,
    });

    try {
        const newPerformance = await performance.save();
        res.status(201).json(newPerformance);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing performance
exports.updatePerformance = async (req, res) => {
    try {
        const updatedPerformance = await Performance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPerformance);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a performance
exports.deletePerformance = async (req, res) => {
    try {
        const deletedPerformance = await Performance.findByIdAndDelete(req.params.id);
        if (!deletedPerformance) {
            return res.status(404).json({ message: 'Performance not found' });
        }
        res.json({ message: 'Performance deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

