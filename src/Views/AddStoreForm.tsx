import React, { useState } from 'react';
import { StoreLocation } from '../types'; 

interface AddStoreFormProps {
  onClose: () => void;
  onAddStore: (newStore: StoreLocation) => void;
}

const AddStoreForm: React.FC<AddStoreFormProps> = ({ onClose, onAddStore }) => {
  // State to store form data
  const [formData, setFormData] = useState<StoreLocation>({
    branch: '', 
    address: '',
    pincode: '',
    name: '', 
    city: '',
    phone: '',
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5000/api/stores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Send form data as JSON
      });
      if (!response.ok) throw new Error('Failed to save store'); // Handle errors
      alert('Store saved successfully!'); // Success message
      // Reset form fields
      setFormData({ branch: '', address: '', pincode: '', name: '', city: '', phone: '' });
    } catch (err) {
      console.error(err); // Log errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for store details */}
      <input
        type="text"
        placeholder="Branch Name"
        value={formData.branch}
        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
      />
      <input
        type="text"
        placeholder="Store Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <button type="submit">Add Store</button>
    </form>
  );
};

export default AddStoreForm;