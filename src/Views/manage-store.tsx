'use client';

import { Bell, Home, LogOut, Package, PieChart, Plus, Settings, ShoppingCart, Store, Users } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';
import { Card, CardContent } from 'src/components/ui/card';
import React, { useState } from 'react';
import AddStoreForm from 'src/Views/AddStoreForm';
import { StoreLocation } from '../types';

export default function ManageStore() {
  const [stores, setStores] = useState<StoreLocation[]>([
    {
      branch: 'North state Branch',
      name: 'Ahmed Store',
      address: '1A/sector 3, 3 rd street',
      city: 'Atbra',
      pincode: '6313403',
      phone: '0122653578',
    },
    {
      branch: 'khartoum Branch',
      name: 'Lisy Store',
      address: 'RD, 60 rd street',
      city: 'khartoum',
      pincode: '63133452',
      phone: '0944653763',
    },
    {
      branch: 'khartoum Branch',
      name: 'Ali Store',
      address: '13 bus station',
      city: 'omdurman',
      pincode: '6313403',
      phone: '0124653578',
    },
  ]);

  const [showAddStoreForm, setShowAddStoreForm] = useState(false);

  const handleAddStore = (newStore: StoreLocation) => {
    console.log('New store added:', newStore);
    setStores([...stores, newStore]);
    setShowAddStoreForm(false);
  };

  const menuItems = [
    { icon: Home, label: 'dashboard', href: '/dashboard' },
    { icon: Package, label: 'Inventory', href: '/inventory' },
    { icon: PieChart, label: 'Reports', href: '/reports' },
    { icon: Users, label: 'Suppliers', href: '/suppliers' },
    { icon: ShoppingCart, label: 'Orders', href: '/orders' },
    { icon: Store, label: 'manage-Store', href: '/manage-store', active: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100/40 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background px-4 py-6 flex flex-col">
        <div className="flex items-center gap-2 px-2 mb-8">
          <span className="text-blue-500 font-bold text-xl">SUDAN</span>
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

        {/* Store Management Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Manage Store</h1>
            <Button className="gap-2" onClick={() => setShowAddStoreForm(true)}>
              <Plus className="h-4 w-4" />
              Add Store
            </Button>
          </div>

          {/* Add Store Form */}
          {showAddStoreForm && (
            <AddStoreForm
              onClose={() => setShowAddStoreForm(false)}
              onAddStore={handleAddStore}
            />
          )}

          {/* Store List */}
          <div className="grid gap-6">
            {stores.map((store) => (
              <Card key={store.branch} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-72 h-48 bg-gray-100" />
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{store.branch}</h3>
                          <h4 className="text-lg mb-2">{store.name}</h4>
                          <p className="text-gray-600 mb-1">{store.address}</p>
                          <p className="text-gray-600 mb-1">
                            {store.city} - {store.pincode}
                          </p>
                          <p className="text-gray-600">{store.phone}</p>
                        </div>
                        <Button variant="ghost" className="text-blue-600">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}