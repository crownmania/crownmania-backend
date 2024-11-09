const express = require('express');
const router = express.Router();
const Collectible = require('../models/collectibleModel');

// Create a new collectible
router.post('/', async (req, res) => {
  try {
    const newCollectible = new Collectible(req.body);
    const savedCollectible = await newCollectible.save();
    res.status(201).json(savedCollectible);
  } catch (error) {
    res.status(500).json({ error: 'Error creating collectible' });
  }
});

// Read all collectibles
router.get('/', async (req, res) => {
  try {
    const collectibles = await Collectible.find();
    res.status(200).json(collectibles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching collectibles' });
  }
});

// Update a collectible by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCollectible = await Collectible.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedCollectible);
  } catch (error) {
    res.status(500).json({ error: 'Error updating collectible' });
  }
});

// Delete a collectible by ID
router.delete('/:id', async (req, res) => {
  try {
    await Collectible.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Collectible deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting collectible' });
  }
});

module.exports = router;