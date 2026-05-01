const Task = require('../models/taskModel');

exports.getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const tasks = await Task.find({ assignedTo: userId });

    const now = new Date();

    const stats = {
      total: tasks.length,
      todo: tasks.filter(t => t.status === 'Todo').length,
      inProgress: tasks.filter(t => t.status === 'In Progress').length,
      done: tasks.filter(t => t.status === 'Done').length,
      overdue: tasks.filter(
        t => t.dueDate && new Date(t.dueDate) < now && t.status !== 'Done'
      ).length
    };

    res.json(stats);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};