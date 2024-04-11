const TaskModel = require('../models/TaskModel');
const UserModel = require('../models/UserModel');

const assignTask = async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Check if the task belongs to the user's project
        // This logic needs to be implemented based on your project structure

        task.assignee = req.body.assigneeId;
        await task.save();

        // Send notification email to assignee
        // This logic needs to be implemented based on your email service

        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const completeTask = async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.isCompleted = true;
        await task.save();

        // Send notification email to task owner
        // This logic needs to be implemented based on your email service

        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { assignTask, completeTask };
