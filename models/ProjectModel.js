const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = ProjectModel;
