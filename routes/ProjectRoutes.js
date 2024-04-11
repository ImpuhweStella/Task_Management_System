const express = require('express');
const router = express.Router();
const projectController = require('../controllers/ProjectController');

router.post('/createProject', projectController.createProject);
router.get('/projects', projectController.listProjects);

module.exports = router;
