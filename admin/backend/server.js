const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/divara-craft', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Basic routes
app.get('/', (req, res) => {
  res.send('Divara Craft Admin Backend API');
});

// User routes (placeholder)
app.get('/api/users', (req, res) => {
  res.json({ message: 'Users endpoint' });
});

// Product routes (placeholder)
app.get('/api/products', (req, res) => {
  res.json({ message: 'Products endpoint' });
});

// Admin routes (placeholder)
app.get('/api/admin', (req, res) => {
  res.json({ message: 'Admin dashboard endpoint' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});