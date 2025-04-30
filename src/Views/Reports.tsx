import React from 'react';
import { Bell, Home, Package, FileText, Users, ShoppingCart, Store, Settings, LogOut, Search } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Input } from 'src/components/ui/input'; // Ensure this import path is correct
import { Avatar, AvatarImage, AvatarFallback } from 'src/components/ui/avatar'; // Ensure this import path is correct

interface ChartData {
  name: string;
  revenue: number;
  profit: number;
}

const chartData: ChartData[] = [
  { name: 'Sep', revenue: 25000, profit: 35000 },
  { name: 'Oct', revenue: 32000, profit: 28000 },
  { name: 'Nov', revenue: 28000, profit: 32000 },
  { name: 'Dec', revenue: 40000, profit: 35000 },
  { name: 'Jan', revenue: 45000, profit: 38000 },
  { name: 'Feb', revenue: 35000, profit: 30000 },
  { name: 'Mar', revenue: 38000, profit: 34000 },
];

const Reports: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <img src="assets/logo.png" alt="logo" />
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-blue-500 font-bold text-xl">SUDAN</span>
          </div>

          <nav className="mt-8 space-y-2">
            <a href="#" className="flex items-center gap-3 text-blue-500 p-2 rounded-lg bg-blue-50">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50">
              <Package className="w-5 h-5" />
              <span>Inventory</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50">
              <FileText className="w-5 h-5" />
              <span>Reports</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50">
              <Users className="w-5 h-5" />
              <span>Suppliers</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50">
              <ShoppingCart className="w-5 h-5" />
              <span>Orders</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50">
              <Store className="w-5 h-5" />
              <span>Manage Store</span>
            </a>
          </nav>
        </div>

        <div className="mt-auto p-6 border-t">
          <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50">
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="relative w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search product, supplier, order" className="pl-8" />
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-600" />
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-2">Total Profit</p>
              <p className="text-2xl font-bold">$21,190</p>
              <p className="text-sm text-gray-500">Net purchase value</p>
              <p className="text-blue-600">$1,17,432</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-2">Revenue</p>
              <p className="text-2xl font-bold">$18,300</p>
              <p className="text-sm text-gray-500">Net sales value</p>
              <p className="text-blue-600">$80,432</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-2">Sales</p>
              <p className="text-2xl font-bold">$17,432</p>
              <p className="text-sm text-gray-500">MoM Profit</p>
              <p className="text-blue-600">$30,432</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-2">YoY Profit</p>
              <p className="text-2xl font-bold">$1,10,432</p>
            </div>
          </div>
        </section>

        {/* Chart Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Profit & Revenue</h2>
            <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
              Weekly
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm" style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563EB"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#E5E7EB"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Tables Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Best Selling Category */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Best selling category</h2>
              <a href="#" className="text-blue-500 text-sm">See All</a>
            </div>
            <div className="bg-white rounded-xl shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 text-gray-600">Category</th>
                    <th className="text-left p-4 text-gray-600">Turn Over</th>
                    <th className="text-left p-4 text-gray-600">Increase By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Vegetable</td>
                    <td className="p-4">$26,000</td>
                    <td className="p-4 text-green-500">3.2%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Instant Food</td>
                    <td className="p-4">$22,000</td>
                    <td className="p-4 text-green-500">2%</td>
                  </tr>
                  <tr>
                    <td className="p-4">Households</td>
                    <td className="p-4">$22,000</td>
                    <td className="p-4 text-green-500">1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Best Selling Products */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Best selling product</h2>
              <a href="#" className="text-blue-500 text-sm">See All</a>
            </div>
            <div className="bg-white rounded-xl shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 text-gray-600">Product</th>
                    <th className="text-left p-4 text-gray-600">Product ID</th>
                    <th className="text-left p-4 text-gray-600">Category</th>
                    <th className="text-left p-4 text-gray-600">Remaining Quantity</th>
                    <th className="text-left p-4 text-gray-600">Turn Over</th>
                    <th className="text-left p-4 text-gray-600">Increase By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Tomato</td>
                    <td className="p-4">23567</td>
                    <td className="p-4">Vegetable</td>
                    <td className="p-4">225 kg</td>
                    <td className="p-4">$17,000</td>
                    <td className="p-4 text-green-500">2.3%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Onion</td>
                    <td className="p-4">25831</td>
                    <td className="p-4">Vegetable</td>
                    <td className="p-4">200 kg</td>
                    <td className="p-4">$12,000</td>
                    <td className="p-4 text-green-500">1.3%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Maggi</td>
                    <td className="p-4">56841</td>
                    <td className="p-4">Instant Food</td>
                    <td className="p-4">200 Packet</td>
                    <td className="p-4">$10,000</td>
                    <td className="p-4 text-green-500">1.3%</td>
                  </tr>
                  <tr>
                    <td className="p-4">Surf Excel</td>
                    <td className="p-4">23567</td>
                    <td className="p-4">Household</td>
                    <td className="p-4">125 Packet</td>
                    <td className="p-4">$9,000</td>
                    <td className="p-4 text-green-500">1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Reports;