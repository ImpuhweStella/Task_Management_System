

const Task = require('../models/TaskModel');
const moment = require('moment');

const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const listTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const task = await Task.findByIdAndDelete(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const { taskId } = req.params;
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateTaskStatus = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { status } = req.body;

        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const currentDate = moment();
        const isOverdue = task.endDate && currentDate.diff(task.endDate, 'hours') > 24;
        const isLate = task.endDate && currentDate.isAfter(task.endDate);

        if (status === 'COMPLETED' || (isOverdue && task.status !== 'COMPLETED')) {
            task.status = status;
        } else if (isOverdue) {
            task.status = 'OVERDUE';
        } else if (isLate) {
            task.status = 'LATE';
        } else {
            task.status = 'IN_PROGRESS';
        }

        await task.save();

        res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const task = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createTask,
    updateTaskStatus,
    listTasks,
    deleteTask,
    getTaskById,
    updateTask
};
