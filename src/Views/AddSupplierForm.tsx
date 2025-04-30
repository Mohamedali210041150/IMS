import React, { useState } from 'react';

const AddSupplierForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    supplier_name: '',
    contact_number: '',
    email: '',
    type: '',
    on_the_way: 0, // Default value for "On the way"
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5000/api/suppliers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Send form data as JSON
      });
      if (!response.ok) throw new Error('Failed to save supplier'); // Handle errors
      alert('Supplier saved successfully!'); // Success message
      // Reset form fields
      setFormData({ supplier_name: '', contact_number: '', email: '', type: '', on_the_way: 0 });
    } catch (err) {
      console.error(err); // Log errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for supplier details */}
      <input
        type="text"
        placeholder="Supplier Name"
        value={formData.supplier_name}
        onChange={(e) => setFormData({ ...formData, supplier_name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={formData.contact_number}
        onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Type"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      />
      <input
        type="number"
        placeholder="On the Way"
        value={formData.on_the_way}
        onChange={(e) => setFormData({ ...formData, on_the_way: parseInt(e.target.value) })}
      />
      <button type="submit">Add Supplier</button>
    </form>
  );
};

export default AddSupplierForm;