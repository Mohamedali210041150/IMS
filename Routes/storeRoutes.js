// routes/storeRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL connection

// Create a new store
router.post('/', (req, res) => {
  const { branch_name, address, pincode, store_name, city, phone } = req.body;
  const query = `
    INSERT INTO Store (branch_name, address, pincode, store_name, city, phone)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [branch_name, address, pincode, store_name, city, phone], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

// Get all stores
router.get('/', (req, res) => {
  const query = 'SELECT * FROM Store';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;