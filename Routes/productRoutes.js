// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new product
router.post('/', (req, res) => {
  const { product_name, price, quantity, threshold_value, expiry_date } = req.body;
  const query = `
    INSERT INTO Product (product_name, price, quantity, threshold_value, expiry_date)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(query, [product_name, price, quantity, threshold_value, expiry_date], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

// Get all products
router.get('/', (req, res) => {
  const query = 'SELECT * FROM Product';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;