const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  userAddress: { type: String, required: true },
  collectibleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Collectible', required: true },
  orderStatus: { type: String, default: 'Pending' },
  // Add additional fields as needed
});

module.exports = mongoose.model('Order', orderSchema);