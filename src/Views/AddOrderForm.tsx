import React, { useState } from 'react';

const AddOrderForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    order_value: 0,
    currency: 'USD', // Default currency
    expected_delivery: '',
    status: 'Pending', // Default status
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Send form data as JSON
      });
      if (!response.ok) throw new Error('Failed to save order'); // Handle errors
      alert('Order saved successfully!'); // Success message
      // Reset form fields
      setFormData({ order_value: 0, currency: 'USD', expected_delivery: '', status: 'Pending' });
    } catch (err) {
      console.error(err); // Log errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for order details */}
      <input
        type="number"
        placeholder="Order Value"
        value={formData.order_value}
        onChange={(e) => setFormData({ ...formData, order_value: parseFloat(e.target.value) })}
      />
      <select
        value={formData.currency}
        onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <input
        type="date"
        placeholder="Expected Delivery"
        value={formData.expected_delivery}
        onChange={(e) => setFormData({ ...formData, expected_delivery: e.target.value })}
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
      </select>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default AddOrderForm;