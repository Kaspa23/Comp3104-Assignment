const express = require('express');
const router = express.Router();
const { getEmployees, createEmployee } = require('../controllers/employeeController');

// Get all employees
router.get('/employees', getEmployees);

// Create new employee
router.post('/employees', createEmployee);

module.exports = router;
