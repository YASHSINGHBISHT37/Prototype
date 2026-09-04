const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const resultRoutes = require('./src/routes/resultRoutes');
const resourceRoutes = require('./src/routes/resourceRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (Use local MongoDB or MongoDB Atlas connection string)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ipu_portal';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api', resultRoutes);
app.use('/api', resourceRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});