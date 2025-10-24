const express = require('express');
const router = express.Router();
const products = require('../data/products');

// GET /api/products - Retorna todos os produtos
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
