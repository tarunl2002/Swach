const express = require('express');
const { createUser } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/users', protect, createUser);

module.exports = router;
