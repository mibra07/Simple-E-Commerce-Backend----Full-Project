// Order Model
// models/Order.model.js

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    userId: String,
    products: Array,
    total: Number,
  },
  {
    collection: 'orders',
  }
);

module.exports = mongoose.model('Order', OrderSchema);
