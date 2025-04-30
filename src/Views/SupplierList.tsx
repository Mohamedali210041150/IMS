import React, { useEffect, useState } from 'react';
interface Supplier {
    supplier_id: number;
    supplier_name: string;
    contact_number: string;
    email: string;
    type: string;
    on_the_way: number;
  }
const SupplierList = () => {
  const [suppliers, setSuppliers] =  useState<Supplier[]>([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/suppliers');
        const data = await response.json();
        setSuppliers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSuppliers();
  }, []);

  return (
    <div>
      <h2>Supplier List</h2>
      <table>
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Type</th>
            <th>On the Way</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.supplier_id}>
              <td>{supplier.supplier_name}</td>
              <td>{supplier.contact_number}</td>
              <td>{supplier.email}</td>
              <td>{supplier.type}</td>
              <td>{supplier.on_the_way}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierList;