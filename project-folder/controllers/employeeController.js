const Employee = require('../models/Employee');

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create new employee
exports.createEmployee = async (req, res) => {
  const { first_name, last_name, email, position, salary, department } = req.body;

  try {
    let employee = new Employee({ first_name, last_name, email, position, salary, department });
    await employee.save();
    res.status(201).json({ message: 'Employee created successfully', employee_id: employee._id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
