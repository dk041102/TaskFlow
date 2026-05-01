const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
  const { title, description, project, assignedTo, dueDate } = req.body;

  const task = await Task.create({
    title,
    description,
    project,
    assignedTo,
    dueDate
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ project: req.params.projectId })
    .populate('assignedTo', 'name');

  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(task);
};