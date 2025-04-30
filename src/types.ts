export interface StoreLocation {
  branch: string; 
  name: string; 
  address: string;
  city: string;
  pincode: string;
  phone: string;
}

export interface Product {
  product_id?: number; // Optional for new products
  product_name: string; // Use product_name instead of name
  price: number; // Price should be a number
  quantity: number; // Quantity should be a number
  threshold_value: number; // Threshold should be a number
  expiry_date: string; // Expiry date as a string
  status: 'In Stock' | 'Out of Stock' | 'Low Stock'; // Correct status values
}

export interface Inventory {
  store_location: StoreLocation;
  products: Product[];
}