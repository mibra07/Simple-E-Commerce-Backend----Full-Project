// Product Model
// models/Product.model.js

const mongoose = require('mongoose');

console.log('Product Schema Loaded...');
const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
  },
  {
    collection: 'products', // 👈 exact name
  }
);
module.exports = mongoose.model('Product', ProductSchema);
