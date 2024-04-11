const express = require('express');
const router = express.Router();
const taskAssignmentController = require('../controllers/TaskAssignmentController');

router.post('/:id/assign', taskAssignmentController.assignTask);
router.put('/:id/complete', taskAssignmentController.completeTask);

module.exports = router;
