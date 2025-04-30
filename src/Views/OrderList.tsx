import React, { useEffect, useState } from 'react';

interface Order {
  order_id: number;
  order_value: number;
  currency: string;
  expected_delivery: string;
  status: string;
}

const OrderList = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        const data: Order[] = await response.json();
        setOrders(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Order Value</th>
          <th>Currency</th>
          <th>Expected Delivery</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.order_id}>
            <td>{order.order_id}</td>
            <td>{order.order_value}</td>
            <td>{order.currency}</td>
            <td>{order.expected_delivery}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList; 