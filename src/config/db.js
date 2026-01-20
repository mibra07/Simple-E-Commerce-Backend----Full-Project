// MongoDB Connection
// src/config/db.js

const mongoose = require('mongoose');

const connectBD = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected MongoDB...');
  } catch (error) {
    console.log('MongoDB Conection Failed...', error.message);
    process.exit(1);
  }
};
module.exports = connectBD;
