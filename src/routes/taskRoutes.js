const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');

const {
  createTask,
  getTasks,
  updateTask
} = require('../controllers/taskControllers');

router.post('/', auth, createTask);
router.get('/:projectId', auth, getTasks);
router.put('/:id', auth, updateTask);

module.exports = router;