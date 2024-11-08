const express = require('express');
const router = express.Router();
const Moralis = require('moralis').default;

// NFT claim route
router.post('/claim-nft', async (req, res) => {
  try {
    const { serialNumber, userAddress } = req.body;
    // Logic to handle NFT claiming
    res.status(200).json({ message: 'NFT claimed successfully' });
  } catch (error) {
    console.error('Error in NFT claim:', error);
    res.status(500).json({ error: 'Failed to claim NFT' });
  }
});

module.exports = router;