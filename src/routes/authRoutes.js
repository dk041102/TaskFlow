const express = require('express');
const router = express.Router();

// const { signup, login } = require('../controllers/authControllers');
const { signup, login, getAllUsers } = require('../controllers/authController');
router.get('/users', auth, role('Admin'), getAllUsers);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;