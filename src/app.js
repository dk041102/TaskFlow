const express = require('express');
const cors = require('cors');
const app = express();

// ✅ THIS IS WHAT'S MISSING — without this the browser blocks all requests
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

module.exports = app;
