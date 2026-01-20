// Order Routes
// routes/order.routes.js

const { createOrder } = require('../controllers/order.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = require('express').Router();

router.post('/', authMiddleware, createOrder);

module.exports = router;
