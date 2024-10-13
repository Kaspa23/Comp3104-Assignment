const express = require('express');
const connectDB = require('./config');
const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Define Routes
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/emp', require('./routes/employeeRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
