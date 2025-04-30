'use client';
import React, { useState } from 'react';
import AddSupplierForm from 'src/Views/AddSupplierForm'; // Import the form
import SupplierList from './SupplierList';
import { Bell, ChevronLeft, ChevronRight, Download, Filter, Home, LogOut, Package, PieChart, Settings, ShoppingCart, Store, Users } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'src/components/ui/table';
import { Badge } from 'src/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';

interface Supplier {
  name: string;
  product: string;
  contact: string;
  email: string;
  type: 'Taking Return' | 'Not Taking Return';
  onTheWay?: string;
}

export default function Component() {
  // State to control the visibility of the form
  const [showForm, setShowForm] = useState(false);

  // Example suppliers data
  const suppliers : Supplier[] = [
    { name: 'Richard Martin', product: 'Kit Kat', contact: '7687764556', email: 'richard@gmail.com', type: 'Taking Return', onTheWay: '13' },
    { name: 'Tom Homan', product: 'Maaza', contact: '9867545368', email: 'tomhoman@gmail.com', type: 'Taking Return' },
    { name: 'Veandir', product: 'Dairy Milk', contact: '9867545566', email: 'veandier@gmail.com', type: 'Not Taking Return' },
    { name: 'Charin', product: 'Tomato', contact: '9267545457', email: 'charin@gmail.com', type: 'Taking Return', onTheWay: '12' },
    { name: 'Hoffman', product: 'Milk Bikis', contact: '9367546531', email: 'hoffman@gmail.com', type: 'Taking Return' },
    { name: 'Fainden Juke', product: 'Marie Gold', contact: '9667545982', email: 'fainden@gmail.com', type: 'Not Taking Return', onTheWay: '9' },
    { name: 'Martin', product: 'Saffola', contact: '9867545457', email: 'martin@gmail.com', type: 'Taking Return' },
    { name: 'Joe Nike', product: 'Good day', contact: '9567545769', email: 'joenike@gmail.com', type: 'Taking Return' },
    { name: 'Dender Luke', product: 'Apple', contact: '9667545980', email: 'dender@gmail.com', type: 'Taking Return', onTheWay: '7' },
  ];

  // Menu items for the sidebar
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Package, label: 'Inventory', href: '/inventory' },
    { icon: PieChart, label: 'Reports', href: '/reports' },
    { icon: Users, label: 'Suppliers', href: '/suppliers', active: true },
    { icon: ShoppingCart, label: 'Orders', href: '/orders' },
    { icon: Store, label: 'Manage Store', href: '/store' },
  ];

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

        {/* Suppliers Section */}
        <div className="bg-background rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Suppliers</h1>
              <div className="flex items-center gap-3">
                <Button
                  variant="default"
                  className="gap-2"
                  onClick={() => setShowForm(!showForm)} // Toggle form visibility
                >
                  Add Supplier
                </Button>
              </div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier Name</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Contact Number</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>On the way</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Conditionally render the form/table row */}
              {showForm && (
                <TableRow>
                  <TableCell>
                    <input type="text" placeholder="Supplier Name" className="p-2 border rounded" />
                  </TableCell>
                  <TableCell>
                    <input type="text" placeholder="Product" className="p-2 border rounded" />
                  </TableCell>
                  <TableCell>
                    <input type="text" placeholder="Contact Number" className="p-2 border rounded" />
                  </TableCell>
                  <TableCell>
                    <input type="email" placeholder="Email" className="p-2 border rounded" />
                  </TableCell>
                  <TableCell>
                    <select className="p-2 border rounded">
                      <option value="Type 1">Type 1</option>
                      <option value="Type 2">Type 2</option>
                    </select>
                  </TableCell>
                  <TableCell>
                    <select className="p-2 border rounded">
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </TableCell>
                </TableRow>
              )}

              {/* Render existing suppliers */}
              {suppliers.map((supplier) => (
                <TableRow key={supplier.email}>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>{supplier.product}</TableCell>
                  <TableCell>{supplier.contact}</TableCell>
                  <TableCell>{supplier.email}</TableCell>
                  <TableCell>
                    <Badge variant={'default'}>{supplier.type}</Badge>
                  </TableCell>
                  <TableCell>{supplier.onTheWay || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}