const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; //
const dbName = 'mydatabase';

let client;
let db;

const connectDB = async () => {
  try {
    client = await MongoClient.connect(url, { useUnifiedTopology: true });
    db = client.db(dbName);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

const closeDB = () => {
  if (client) {
    client.close();
    console.log('MongoDB connection closed');
  }
};

const getDB = () => {
  return db;
};

module.exports = {
  connectDB,
  closeDB,
  getDB
};
