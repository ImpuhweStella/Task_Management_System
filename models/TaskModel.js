const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['TODO', 'IN_PROGRESS', 'COMPLETED', 'LATE', 'OVERDUE'],
        default: 'TODO'
    },
    startDate: {
        type: String,
        default: Date.now
    },
    endDate: {
        type: String
    },
    duration: {
        type: Number // in minutes, hours, or days
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
