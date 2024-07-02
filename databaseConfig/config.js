const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const dataBaseName = process.env.dbName;
try {
   mongoose.connect(mongoURI, {
    dbName: dataBaseName,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 30000,
    maxPoolSize: 10
  });

  console.log(`MongoDB Connected`);
  
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
