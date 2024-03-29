const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/TaskRoutes');

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/taskManagement')

app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
