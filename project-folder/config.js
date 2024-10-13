const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://valentineehichioya2003:6L37GvjMcWNrSMnj@cluster2.r9ft4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2'); // Fetch MongoDB URI from env variable
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
