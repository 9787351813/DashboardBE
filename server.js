const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); 
});

const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const leaveRequestRoutes = require('./routes/LeaveRequestRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const recruitmentRoutes = require('./routes/recruitmentRoutes');
const reportsRoutes = require('./routes/reportsRoutes'); 
const analyticsRoutes= require('./routes/analyticsRoutes');
const mainRoutes= require('./routes/mainRoutes');
const chartRoutes = require('./routes/chartRoutes');
const todoRoutes = require('./routes/todoRoutes');

app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/leaves', leaveRequestRoutes);
app.use('/api', attendanceRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/recruitment', recruitmentRoutes);
app.use('/api/reports', reportsRoutes); 
app.use('/api/analytics', analyticsRoutes);
app.use('/api/main',mainRoutes);
app.use('/api', chartRoutes);
app.use('/api', todoRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
