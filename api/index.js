require('dotenv').config();

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Moralis = require('moralis').default;
const { getProducts } = require('./shopify');

const app = express();
const PORT = process.env.PORT || 3000;

// Check for required environment variables
if (!process.env.MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in the environment variables.');
  process.exit(1);
}

if (!process.env.MORALIS_API_KEY) {
  console.error('Error: MORALIS_API_KEY is not defined in the environment variables.');
  process.exit(1);
}

console.log('Environment Variables:');
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Defined' : 'Not Defined');
console.log('MORALIS_API_KEY:', process.env.MORALIS_API_KEY ? 'Defined' : 'Not Defined');

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

app.get('/', (req, res) => res.send('CrownMania Backend is running'));

app.get('/api/shopify/products', async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products from Shopify' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});