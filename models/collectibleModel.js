const mongoose = require('mongoose');

const collectibleSchema = new mongoose.Schema({
  serialNumber: { type: String, required: true, unique: true },
  collectibleName: { type: String, required: true },
  collectibleNumber: { type: Number, required: true },
  isVerified: { type: Boolean, default: false },
  tokenClaimed: { type: Boolean, default: false },
  // Add any additional fields as needed
});

module.exports = mongoose.model('Collectible', collectibleSchema);