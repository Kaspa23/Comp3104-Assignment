const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { signup, login } = require('../controllers/userController');

// Signup Route
router.post(
  '/signup',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  signup
);

// Login Route
router.post('/login', login);

module.exports = router;
