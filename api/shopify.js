const Shopify = require('shopify-api-node');
const express = require('express');
const router = express.Router();

const shopifyConfig = require('../config/shopify');

// Fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await shopifyConfig.product.list();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Add a new product
router.post('/products', async (req, res) => {
  try {
    const newProduct = await shopifyConfig.product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Update a product
router.put('/products/:id', async (req, res) => {
  try {
    const updatedProduct = await shopifyConfig.product.update(req.params.id, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product
router.delete('/products/:id', async (req, res) => {
  try {
    await shopifyConfig.product.delete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;