const express = require('express');
const router = express.Router();
const Collectible = require('../models/collectibleModel');

// Verification route
router.get('/:serialNumber', async (req, res) => {
  try {
    const collectible = await Collectible.findOne({ serialNumber: req.params.serialNumber });
    if (collectible) {
      res.status(200).json({ verified: true, data: collectible });
    } else {
      res.status(404).json({ verified: false, message: 'Collectible not found' });
    }
  } catch (error) {
    console.error('Error in verification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;