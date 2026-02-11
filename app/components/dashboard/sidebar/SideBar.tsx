"use client";

import Link from "next/link";
import { Home, Users, BarChart3, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md min-h-screen hidden md:flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-red-600">Staff Panel</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
          <Home size={18} /> Overview
        </Link>

        <Link href="/dashboard/staff" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
          <Users size={18} /> Staff
        </Link>

        <Link href="/dashboard/reports" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
          <BarChart3 size={18} /> Reports
        </Link>

        <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
          <Settings size={18} /> Settings
        </Link>
      </nav>
    </aside>
  );
}
