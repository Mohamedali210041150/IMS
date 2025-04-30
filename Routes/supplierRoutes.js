// routes/supplierRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new supplier
router.post('/', (req, res) => {
  const { supplier_name, contact_number, email, type, on_the_way } = req.body;
  const query = `
    INSERT INTO Supplier (supplier_name, contact_number, email, type, on_the_way)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(query, [supplier_name, contact_number, email, type, on_the_way], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

// Get all suppliers
router.get('/', (req, res) => {
  const query = 'SELECT * FROM Supplier';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;