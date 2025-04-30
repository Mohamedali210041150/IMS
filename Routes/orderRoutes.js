// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new order
router.post('/', (req, res) => {
  const { order_value, currency, expected_delivery, status } = req.body;
  const query = `
    INSERT INTO \`Order\` (order_value, currency, expected_delivery, status)
    VALUES (?, ?, ?, ?)
  `;
  db.query(query, [order_value, currency, expected_delivery, status], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

// Get all orders
router.get('/', (req, res) => {
  const query = 'SELECT * FROM `Order`';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;