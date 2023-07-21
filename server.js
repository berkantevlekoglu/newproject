const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connectDB, closeDB, getDB } = require('./db');

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const formData = req.body;
  
  const db = getDB();
  const collection = db.collection('forms');

  collection.insertOne(formData, (err, result) => {
    if (err) {
      console.error('Error inserting form data:', err);
      res.status(500).send('An error occurred');
      return;
    }

    res.send('Form submitted and saved to database');
  });
});

app.get('/forms', (req, res) => {
  const db = getDB();
  const collection = db.collection('forms');

  collection.find({}).toArray((err, documents) => {
    if (err) {
      console.error('Error retrieving form data:', err);
      res.status(500).send('An error occurred');
      return;
    }

    res.json(documents);
  });
});

connectDB();

process.on('SIGINT', () => {
  closeDB();
  process.exit();
});

app.listen(5501, () => {
  console.log('Server started on port 5501');
});
