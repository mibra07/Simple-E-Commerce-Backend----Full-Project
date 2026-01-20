// Product Controller
// controllers/product.controller.js

const Product = require('../models/Product.model');

// CREATE
exports.addProduct = async (req, res) => {
  console.log('Added Products...');
  const product = await Product.create(req.body);
  res.json(product);
};
