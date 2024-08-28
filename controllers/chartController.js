const Chart = require('../models/Chart');

exports.getChartData = async (req, res) => {
    try {
        const chartCounts = await Chart.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ]);

        const chartData = {
            present: 0,
            absent: 0,
            late: 0
        };

        chartCounts.forEach(item => {
            chartData[item._id.toLowerCase()] = item.count;
        });

        res.json(chartData);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
