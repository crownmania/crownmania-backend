require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Moralis = require('moralis').default;
const shopifyRoutes = require('./api/shopify');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
}).then(() => {
  console.log('Moralis initialized');
}).catch((error) => {
  console.error('Moralis initialization error:', error);
  process.exit(1);
});

app.use('/api/shopify', shopifyRoutes);

app.get('/', (req, res) => res.send('CrownMania Backend is running'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});