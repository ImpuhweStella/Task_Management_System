const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/AuthRoutes');
const projectRoutes = require('./routes/ProjectRoutes');
const taskAssignmentRoutes = require('./routes/TaskAssignmentRoutes');
const taskRoutes = require('./routes/TaskRoutes');

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/TaskManagementApp')

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);
app.use('/tasks', taskAssignmentRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
