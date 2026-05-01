const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
  const { name, description } = req.body;

  const project = await Project.create({
    name,
    description,
    owner: req.user.id,
    members: [req.user.id]
  });

  res.json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find({
    members: req.user.id
  }).populate('members', 'name email');

  res.json(projects);
};

exports.addMember = async (req, res) => {
  const { userId } = req.body;

  const project = await Project.findById(req.params.id);

  project.members.push(userId);
  await project.save();

  res.json(project);
};