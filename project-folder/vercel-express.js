const express = require('express');
const connectDB = require('../config'); // Adjust path to your config.js

// Initialize express
const app = express();

// Connect Database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes (you can move your existing routes here)
app.use('/api/v1/user', require('../routes/userRoutes')); // Adjust path to your routes
app.use('/api/v1/emp', require('../routes/employeeRoutes')); // Adjust path to your routes

// Export the serverless function
module.exports = app;
