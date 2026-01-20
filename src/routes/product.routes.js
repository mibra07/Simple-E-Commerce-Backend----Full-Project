// Product Routes
// routes/product.routes.js

const router = require('express').Router();
const { addProduct } = require('../controllers/product.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware, addProduct);

module.exports = router;
