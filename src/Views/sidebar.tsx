import { FileText, Home, LogOut, Package, Settings, ShoppingCart, Store, Users } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "src/images/logo.png";

export default function Sidebarcf()
{
    return  (
        <aside className="w-64 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-8">
        <img className="w-12 h-12" src={logo} alt="Logo" />
          <span className="text-blue-500 font-bold text-xl">SUDAN</span>
        </div>
        <nav className="space-y-2">
          <a href="/dashboard" className="flex items-center gap-3 text-blue-500 p-2 rounded hover:bg-blue-50">
            <Home className="w-5 h-5" />
            dashboard
          </a>
          <a href="/Inventory" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <Package className="w-5 h-5" />
            Inventory
          </a>
          <a href="/Reports" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <FileText className="w-5 h-5" />
            Reports
          </a>
          <a href="/suppliers" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <Users className="w-5 h-5" />
            suppliers
          </a>
          <a href=" /orders"className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <ShoppingCart className="w-5 h-5" />
            orders
          </a>
          <a href="/manage-store" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <Store className="w-5 h-5" />
            manage-Store
          </a>
        </nav>

        <div className="mt-auto pt-8 space-y-2">
          <a href="/settings" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <Settings className="w-5 h-5" />
            settings
          </a>
          <a href="/logout" className="flex items-center gap-3 text-gray-600 p-2 rounded hover:bg-gray-50">
            <LogOut className="w-5 h-5" />
            log Out
          </a>
        </div>
      </aside>
    )
}