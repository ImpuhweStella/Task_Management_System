
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');

router.get('/', taskController.listTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', taskController.createTask);
router.put('/:id/status', taskController.updateTaskStatus);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
