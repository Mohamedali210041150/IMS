import React, { useState } from 'react';
import {Product} from '../types';

interface AddProductFormProps {
  onClose: () => void;
  onAddProduct: (newProduct: Product) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onClose, onAddProduct }) => {
  // State to store form data
  const [formData, setFormData] = useState({
    product_name: '',
    price: 0,
    quantity: 0,
    threshold_value: 0,
    expiry_date: '',
    status: 'Out of Stock', // Default status
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Send form data as JSON
      });
      if (!response.ok) throw new Error('Failed to save product'); // Handle errors
      alert('Product saved successfully!'); // Success message
      onClose();
      // Reset form field
    } catch (err) {
      console.error(err); // Log errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for product details */}
      <input
        type="text"
        placeholder="Product Name"
        value={formData.product_name}
        onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Threshold Value"
        value={formData.threshold_value}
        onChange={(e) => setFormData({ ...formData, threshold_value: parseInt(e.target.value) })}
      />
      <input
        type="date"
        placeholder="Expiry Date"
        value={formData.expiry_date}
        onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })}
      />
      <button type="submit">Add Product </button> 
      <button onClick={onClose}>Cancel</button>
    </form>
  );
};

export default AddProductForm;