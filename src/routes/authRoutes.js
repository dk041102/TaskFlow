const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const { signup, login, getAllUsers } = require('../controllers/authControllers');

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', auth, role('Admin'), getAllUsers);

module.exports = router;