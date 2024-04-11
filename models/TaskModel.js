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
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    },
    duration: {
        type: Number, // in minutes, hours, or days
        required: false
    },
    category: {
        type: String,
        enum: ['WEEKLY', 'DAILY'],
        required: true
    },
    priority: {
        type: String,
        enum: ['LOW', 'MEDIUM', 'HIGH', 'VERY HIGH'],
        default: 'MEDIUM'
    },
    color: {
        type: String,
        required: false
    },
    checklist: [{
        title: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    }],
    workload: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isCompleted: {
        type: Boolean,
        default: false
    }

});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;
