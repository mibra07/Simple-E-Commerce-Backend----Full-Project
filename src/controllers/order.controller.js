// Order Controller
// controllers/order.controller.js

const Order = require('../models/Order.model');

exports.createOrder = async (req, res) => {
  console.log('Create Order...');
  const order = await Order.create({
    userId: req.user.id,
    products: req.body.products,
    total: req.body.total,
  });
  console.log('Order Placed...');
  res.json(order);
};
