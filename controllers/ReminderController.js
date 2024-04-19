// controllers/ReminderController.js

const TaskModel = require('../models/TaskModel');

const setReminder = async (req, res) => {
    const taskId = req.params.id;
    const { date } = req.body;
    try {
        const task = await TaskModel.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.reminders.push({ date, sent: false });
        await task.save();
        res.status(200).json({ message: 'Reminder set successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { setReminder };
