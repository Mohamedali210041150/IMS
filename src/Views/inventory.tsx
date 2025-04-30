import React, { useState } from 'react';
import AddProductForm from './AddProductForm'; // Import the form
import ProductList from './ProductList';
import { Bell, Search, Plus } from 'lucide-react';
import { Input } from 'src/components/ui/input';
import { Button } from 'src/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from 'src/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'src/components/ui/table';
import { Badge } from 'src/components/ui/badge';
import Sidebarcf from './sidebar';
import { Product } from '../types';

const InventoryDashboard = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      product_id: 1,
      product_name: 'Maggil',
      price: 5430,
      quantity: 40,
      threshold_value: 12,
      expiry_date: '2022-12-11',
      status: 'In Stock',
    },
    {
      product_id: 2,
      product_name: 'Bru',
      price: 5257,
      quantity: 0,
      threshold_value: 12,
      expiry_date: '2022-12-21',
      status: 'Out of Stock',
    },
  ]);

  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const handleAddProduct = (newProduct: Product) => {
    newProduct.product_id = products.length + 1;
    setProducts([...products, newProduct]);
    setShowAddProductForm(false);
  };

  const toggleProductStatus = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === productId
          ? {
              ...product,
              status: product.status === 'In Stock' ? 'Out of Stock' : 'In Stock',
            }
          : product
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebarcf />

      {/* Main Content */}
      <main className="flex-1 px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-96">
            <div className="relative">
              <Input placeholder="Search product, supplier, order" className="pl-10" />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-600 rounded-full" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Overall Inventory */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Overall Inventory</h2>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-blue-500 font-medium mb-2">Categories</h3>
              <p className="text-2xl font-bold mb-1">14</p>
              <span className="text-sm text-gray-500">Last 7 days</span>
            </div>
            <div>
              <h3 className="text-orange-500 font-medium mb-2">Total Products</h3>
              <p className="text-2xl font-bold mb-1">868</p>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-500">Last 7 days</span>
                <span className="text-sm font-medium">$25000</span>
                <span className="text-xs text-gray-500">Revenue</span>
              </div>
            </div>
            <div>
              <h3 className="text-purple-500 font-medium mb-2">Top Selling</h3>
              <p className="text-2xl font-bold mb-1">5</p>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-500">Last 7 days</span>
                <span className="text-sm font-medium">$2500</span>
                <span className="text-xs text-gray-500">Cost</span>
              </div>
            </div>
            <div>
              <h3 className="text-red-500 font-medium mb-2">Low Stocks</h3>
              <p className="text-2xl font-bold mb-1">12</p>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-500">Ordered</span>
                <span className="text-sm font-medium">2</span>
                <span className="text-xs text-gray-500">Not in stock</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Products</h2>
              <div className="flex gap-3">
                <Button onClick={() => setShowAddProductForm(true)} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Product
                </Button>
              </div>
            </div>
          </div>

          <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Buying Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Threshold Value</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Availability</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.product_id}>
              <TableCell>
                <a
                  href={`/product/${product.product_name.toLowerCase().replace(' ', '-')}`}
                  className="text-blue-500 hover:underline"
                >
                  {product.product_name}
                </a>
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.threshold_value}</TableCell>
              <TableCell>{product.expiry_date}</TableCell>
              <TableCell>
                <Badge
                  className={
                    product.status === 'In Stock'
                      ? 'bg-green-100 text-green-600'
                      : product.status === 'Out of Stock'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-yellow-100 text-yellow-600' // For 'Low Stock'
                  }
                >
                  {product.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

          {/* Pagination */}
          <div className="p-4 border-t flex items-center justify-between">
            <Button variant="outline" size="sm" className="gap-2">
              Previous
            </Button>
            <span className="text-sm text-gray-600">Page 1 of 1</span>
            <Button variant="outline" size="sm" className="gap-2">
              Next
            </Button>
          </div>
        </div>

        {/* Add Product Modal */}
        {showAddProductForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <AddProductForm
                onClose={() => setShowAddProductForm(false)}
                onAddProduct={handleAddProduct}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default InventoryDashboard;