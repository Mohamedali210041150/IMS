import React, { useEffect, useState } from 'react';
interface Store {
    store_id: number;
    store_name: string;
    branch_name: string;
    address: string;
    city: string;
    phone: string;
  }
const StoreList = () => {
  const [stores, setStores] = useState<Store[]>([]);

  // Fetch stores from the backend
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/stores');
        const data = await response.json();
        setStores(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStores();
  }, []);

  return (
    <div>
      <h2>Store List</h2>
      <table>
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Branch Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store.store_id}>
              <td>{store.store_name}</td>
              <td>{store.branch_name}</td>
              <td>{store.address}</td>
              <td>{store.city}</td>
              <td>{store.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreList;