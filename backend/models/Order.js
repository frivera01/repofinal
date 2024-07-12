// src/models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  products: [{
    name: String,
    price: Number,
    quantity: Number
  }],
  total: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  returned: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Order', orderSchema);
