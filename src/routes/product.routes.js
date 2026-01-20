// Product Routes
// routes/product.routes.js

const router = require('express').Router();
const {
  addProduct,
  getProducts,
} = require('../controllers/product.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware, addProduct);
router.get('/', authMiddleware, getProducts);

module.exports = router;
