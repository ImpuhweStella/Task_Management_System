const ProjectModel = require('../models/ProjectModel');

const createProject = async (req, res) => {
    try {
        const project = new ProjectModel({
            name: req.body.name,
            owner: req.user.userId
        });

        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const listProjects = async (req, res) => {
    try {
        const projects = await ProjectModel.find({ owner: req.user.userId });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createProject, listProjects };
