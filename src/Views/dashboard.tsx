"use client";

import { Bell, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import Purchase_bag from "src/images/Purchase bag.png";
import Revenue from "src/images/Revenue.png";
import Cost from "src/images/Cost.png";
import Cost_Purchase from "src/images/Cost_Purchase.png";
import Sales from "src/images/Sales.png";
import Cancel from "src/images/Cancel.png";
import Profit from "src/images/Profit.png";
import profile_pic from "src/images/profile_pic.png";
import Tata_Salt from "src/images/Tata_Salt.png";
import Lays from "src/images/Lays.png";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import Sidebarcf from "src/Views/sidebar";

// Define TypeScript types for chart data
interface ChartData {
  name: string;
  Purchase?: number;
  Sales?: number;
  Ordered?: number;
  Delivered?: number;
}

export default function Dashboard() {
  const data: ChartData[] = [
    { name: "Jan", Purchase: 45000, Sales: 48000 },
    { name: "Feb", Purchase: 52000, Sales: 48000 },
    { name: "Mar", Purchase: 42000, Sales: 50000 },
    { name: "Apr", Purchase: 38000, Sales: 42000 },
    { name: "May", Purchase: 45000, Sales: 40000 },
    { name: "Jun", Purchase: 28000, Sales: 40000 },
  ];

  const data2: ChartData[] = [
    { name: "Jan", Ordered: 3500, Delivered: 2800 },
    { name: "Feb", Ordered: 2800, Delivered: 2900 },
    { name: "Mar", Ordered: 3200, Delivered: 3000 },
    { name: "Apr", Ordered: 2900, Delivered: 2800 },
    { name: "May", Ordered: 3500, Delivered: 3200 },
  ];

  const orderSummaryData: ChartData[] = [
    { name: "Jan", Ordered: 3500, Delivered: 2800 },
    { name: "Feb", Ordered: 2800, Delivered: 2900 },
    { name: "Mar", Ordered: 3200, Delivered: 3000 },
    { name: "Apr", Ordered: 2900, Delivered: 2800 },
    { name: "May", Ordered: 3500, Delivered: 3200 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebarcf />

      {/* Main Content */}
      <main className="flex-1 px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-96">
            <div className="relative">
              <Input
                placeholder="Search product, supplier, order"
                className="pl-10"
              />
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
            <AvatarImage src="/placeholder.svg" alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6">
          {/* Sales Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-4">
              <div className="space-y-1">
                <img src={Sales} alt="Sales" />
                <span className="text-2xl font-bold">$ 832</span>
                <p className="text-sm text-gray-500">Sales</p>
              </div>
              <div className="space-y-1">
                <img src={Revenue} alt="Revenue" />
                <span className="text-2xl font-bold">$ 18,300</span>
                <p className="text-sm text-gray-500">Revenue</p>
              </div>
              <div className="space-y-1">
                <img src={Profit} alt="Profit" />
                <span className="text-2xl font-bold">$ 868</span>
                <p className="text-sm text-gray-500">Profit</p>
              </div>
              <div className="space-y-1">
                <img src={Cost} alt="Cost" />
                <span className="text-2xl font-bold">$ 17,432</span>
                <p className="text-sm text-gray-500">Cost</p>
              </div>
            </CardContent>
          </Card>

          {/* Purchase Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Purchase Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-4">
              <div className="space-y-1">
                <img src={Purchase_bag} alt="Purchase" />
                <span className="text-2xl font-bold">$82</span>
                <p className="text-sm text-gray-500">Purchase</p>
              </div>
              <div className="space-y-1">
                <img src={Cost_Purchase} alt="Cost_Purchase" />
                <span className="text-2xl font-bold">$ 13,573</span>
                <p className="text-sm text-gray-500">Cost_Purchase</p>
              </div>
              <div className="space-y-1">
                <img src={Cancel} alt="Cancel" />
                <span className="text-2xl font-bold">$50</span>
                <p className="text-sm text-gray-500">Cancel</p>
              </div>
              <div className="space-y-1">
                <img src={Profit} alt="Profit" />
                <span className="text-2xl font-bold">$ 17,432</span>
                <p className="text-sm text-gray-500">Return</p>
              </div>
            </CardContent>
          </Card>

          {/* Charts Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Sales & Purchase Chart */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Sales & Purchase</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Purchase" fill="#8884d8" />
                    <Bar dataKey="Sales" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={orderSummaryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Ordered"
                      stroke="#ff9f40"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Delivered"
                      stroke="#87cefa"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Tables Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Top Selling Stock */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Top Selling Stock</CardTitle>
                <a href="#" className="text-sm text-blue-500">
                  See All
                </a>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Sold Quantity</TableHead>
                      <TableHead>Remaining Quantity</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Surf Excel</TableCell>
                      <TableCell>30</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>$ 100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Rin</TableCell>
                      <TableCell>21</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>$ 207</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Parle G</TableCell>
                      <TableCell>19</TableCell>
                      <TableCell>17</TableCell>
                      <TableCell>$ 105</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Low Quantity Stock */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Low Quantity Stock</CardTitle>
                <a href="#" className="text-sm text-blue-500">
                  See All
                </a>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={Tata_Salt} alt="Tata Salt" className="w-12 h-12" />
                      <div>
                        <h4 className="font-semibold">Tata Salt</h4>
                        <p className="text-sm text-gray-500">Remaining Quantity: 9 Packet</p>
                      </div>
                    </div>
                    <span className="text-red-500 text-sm">Low</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={Lays} alt="Lays" className="w-12 h-12" />
                      <div>
                        <h4 className="font-semibold">Lays</h4>
                        <p className="text-sm text-gray-500">Remaining Quantity: 10 Packet</p>
                      </div>
                    </div>
                    <span className="text-red-500 text-sm">Low</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}