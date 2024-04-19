
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');
const ReminderController = require('../controllers/ReminderController');

router.post('/:id/setReminder', ReminderController.setReminder);

router.get('/', taskController.listTasks);
router.get('/:id', taskController.getTaskById);
router.post('/createTask', taskController.createTask);
router.put('/:id/status', taskController.updateTaskStatus);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
