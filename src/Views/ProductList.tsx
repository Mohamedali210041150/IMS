import React, { useEffect, useState } from 'react';
interface Product {
    product_id: number;
    product_name: string;
    price: number;
    quantity: number;
    threshold_value: number;
    expiry_date: string;
    in_stock: boolean;
  }
const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);
  
  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Threshold Value</th>
            <th>Expiry Date</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.threshold_value}</td>
              <td>{product.expiry_date}</td>
              <td>{product.in_stock ? 'In Stock' : 'Out of Stock'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;