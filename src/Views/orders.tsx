'use client';

import { Bell, ChevronLeft, ChevronRight, Filter, History, Home, LogOut, Package, PieChart, Plus, Settings, ShoppingCart, Store, Users } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'src/components/ui/table';
import { Badge } from 'src/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from 'src/components/ui/card';
import React, { useState } from 'react'; 
import AddOrderForm from 'src/Views/AddOrderForm';
import OrderList from 'src/Views/OrderList';

type OrderStatus = 'Delayed' | 'Confirmed' | 'Returned' | 'Out for delivery';

interface Order {
  product: string;
  value: number;
  currency?: string;
  quantity: string;
  orderId: string;
  expectedDelivery: string;
  status: OrderStatus;
}

export default function Component() {
  // State to control the visibility of the "Add Order" form
  const [showAddOrderForm, setShowAddOrderForm] = useState(false);

  //orders data
  const orders: Order[] = [
    { product: 'Maggi', value : 4306, currency: 'USD',quantity: '43 Packets', orderId: '1', expectedDelivery: '11/12/25', status: 'Delayed' },
    { product: 'Bru', value: 2557, currency: 'USD',quantity: '22 Packets', orderId: '2', expectedDelivery: '21/12/25', status: 'Confirmed' },
    { product: 'Red', value: 4075, currency: 'USD',quantity: '36 Packets', orderId: '3', expectedDelivery: '5/12/25', status: 'Returned' },
    { product: 'Vita', value: 5052, currency: 'USD',quantity: '14 Packets', orderId: '4', expectedDelivery: '8/12/25', status: 'Out for delivery' },
    { product: 'Horlicks', value: 5370, currency: 'USD',quantity: '5 Packets', orderId: '5', expectedDelivery: '9/1/25', status: 'Returned' },
    { product: 'Harpic', value: 6065, currency: 'USD',quantity: '10 Packets', orderId: '6', expectedDelivery: '9/1/25', status: 'Out for delivery' },
    { product: 'Ariel', value: 4078, currency: 'USD',quantity: '23 Packets', orderId: '7', expectedDelivery: '15/12/25', status: 'Delayed' },
    { product: 'Brite', value: 3559, currency: 'USD',quantity: '43 Packets', orderId: '8', expectedDelivery: '6/6/25', status: 'Confirmed' },
    { product: 'Coca', value: 2055, currency: 'USD',quantity: '41 Packets', orderId: '9', expectedDelivery: '11/11/25', status: 'Delayed' },
  ];

  const formatCurrency = (value: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(value);
  };

  // Menu items for the sidebar
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/', active: false },
    { icon: Package, label: 'Inventory', href: '/inventory', active: false },
    { icon: PieChart, label: 'Reports', href: '/reports', active: false },
    { icon: Users, label: 'Suppliers', href: '/suppliers', active: false },
    { icon: ShoppingCart, label: 'Orders', href: '/orders', active: true },
    { icon: Store, label: 'Manage Store', href: '/store', active: false },
  ];

  // Function to get status color
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'Delayed':
        return 'destructive';
      case 'Confirmed':
        return 'default';
      case 'Returned':
        return 'destructive';
      case 'Out for delivery':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100/40 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background px-4 py-6 flex flex-col">
        <div className="flex items-center gap-2 px-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="text-blue-600 font-bold text-xl">SUDAN</span>
        </div>

        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="space-y-1 pt-4 border-t">
          <a
            href="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
            Settings
          </a>
          <a
            href="/logout"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-96">
            <div className="relative">
              <Input placeholder="Search product, supplier, order" className="pl-10" />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-600 rounded-full" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Overall Orders Section */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-600">Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">37</div>
              <p className="text-xs text-muted-foreground">Last days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-600">Total Received</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">Last days</p>
                <p className="text-sm font-medium">$25000 Revenue</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-600">Total Returned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">Last 7 days</p>
                <p className="text-sm font-medium">$2500 Cost</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-600">On the way</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">Ordered</p>
                <p className="text-sm font-medium">$2356 Cost</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders Section */}
        <div className="bg-background rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Orders</h1>
              <div className="flex items-center gap-3">
                <Button
                  className="gap-2"
                  onClick={() => setShowAddOrderForm(!showAddOrderForm)} // Toggle form visibility
                >
                  <Plus className="h-4 w-4" />
                  Add Order
                </Button>
              </div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Products</TableHead>
                <TableHead>Order Value</TableHead>
                <TableHead>currency</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Expected Delivery</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Conditionally render the "Add Order" form */}
              {showAddOrderForm && (
                <TableRow>
                  <TableCell>
                    <input type="text" placeholder="Product" className="p-2 border rounded" />
                  </TableCell>
                  <TableCell>
                    <input type="number" placeholder="Order Value" className="p-2 border rounded" />
                  </TableCell>
                  <TableCell>
                    <select className="p-2 border rounded">
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="SDN">SDN</option>
                    </select>
                  </TableCell>
                  <TableCell>
                    <input type="text" placeholder="Quantity" className="p-2 border rounded" />
                  </TableCell>
                  <TableCell>
                    <input type="text" placeholder="Order ID" className="p-2 border rounded" />
                  </TableCell>
                  <TableCell>
                    <input type="date" placeholder="Expected Delivery" className="p-2 border rounded" />
                  </TableCell>
                  <TableCell>
                    <select className="p-2 border rounded">
                      <option value="Delayed">Delayed</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Returned">Returned</option>
                      <option value="Out for delivery">Out for delivery</option>
                    </select>
                  </TableCell>
                </TableRow>
              )}

              {/* Render existing orders */}
              {orders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{formatCurrency(order.value, order.currency)}</TableCell>
                  <TableCell>{order.currency}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.expectedDelivery}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="p-4 border-t flex items-center justify-between">
            <Button variant="outline" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm text-gray-600">Page 1 of 1</span>
            <Button variant="outline" size="sm" className="gap-2">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}