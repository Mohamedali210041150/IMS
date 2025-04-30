import React, { useState } from 'react'
import { Bell, Download, Home, Package, FileText, Users, ShoppingCart, Store, Settings, LogOut, Search, PenLine, ArrowLeft } from "lucide-react"

const ProductDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-500 rounded"></div>
          <span className="text-blue-500 font-bold text-xl">Sudan</span>
        </div>
        
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <Home className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 text-blue-500 p-2 rounded bg-blue-50">
            <Package className="w-5 h-5" />
            Inventory
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <FileText className="w-5 h-5" />
            Reports
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <Users className="w-5 h-5" />
            Suppliers
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <ShoppingCart className="w-5 h-5" />
            Orders
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <Store className="w-5 h-5" />
            Manage Store
          </a>
        </nav>

        <div className="mt-auto pt-8 space-y-2">
          <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <Settings className="w-5 h-5" />
            Settings
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <LogOut className="w-5 h-5" />
            Log Out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white p-4 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/inventory" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              Back to Inventory
            </a>
            <div className="relative w-96">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search product, supplier, order"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        {/* Product Details */}
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Maggi</h1>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <PenLine className="w-4 h-4" />
                Edit
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {['Overview', 'Purchases', 'Adjustments', 'History'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`${
                      activeTab === tab.toLowerCase()
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {activeTab === 'overview' && (
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 space-y-8">
                {/* Primary Details */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-semibold mb-4">Primary Details</h2>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Product name</p>
                        <p className="font-medium">Maggi</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Product ID</p>
                        <p className="font-medium">456567</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Product category</p>
                        <p className="font-medium">Instant food</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Expiry Date</p>
                        <p className="font-medium">13/4/23</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Threshold Value</p>
                      <p className="font-medium">12</p>
                    </div>
                  </div>
                </div>

                {/* Supplier Details */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-semibold mb-4">Supplier Details</h2>
                  <div className="grid gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Supplier name</p>
                      <p className="font-medium">Ronald Martin</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact Number</p>
                      <p className="font-medium">98789 86757</p>
                    </div>
                  </div>
                </div>

                {/* Stock Locations */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-semibold mb-4">Stock Locations</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <p className="text-gray-600">Store Name</p>
                      <p className="text-gray-600">Stock in hand</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Sulur Branch</p>
                      <p className="text-blue-500">15</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Singanallur Branch</p>
                      <p className="text-blue-500">19</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-8">
                    <img
                      src="/placeholder.svg"
                      alt="Maggi"
                      className="w-48 h-48 mx-auto object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Opening Stock</p>
                      <p className="text-xl font-semibold">40</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Remaining Stock</p>
                      <p className="text-xl font-semibold">34</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">On the way</p>
                      <p className="text-xl font-semibold">15</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Threshold value</p>
                      <p className="text-xl font-semibold">12</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails