"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Network,
  GraduationCap,
  Briefcase,
  Coffee,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Web Department", href: "/dashboard/webdepartment", icon: Users },
  { name: "Networking", href: "/dashboard/networking", icon: Network },
  { name: "Accounts", href: "/dashboard/accounts", icon: CreditCard },
  { name: "Academy", href: "/dashboard/academy", icon: GraduationCap },
  { name: "Projects", href: "/dashboard/projects", icon: Briefcase },
  { name: "Cafe Sales", href: "/dashboard/cafe-sales", icon: Coffee },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setMobileOpen(true)}>
            <Menu />
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setMobileOpen(false)}
              />

              {/* Drawer */}
              <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-red-600">Menu</h2>
                  <button onClick={() => setMobileOpen(false)}>
                    <X />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                          isActive
                            ? "bg-red-50 text-red-600 font-medium"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <Icon size={18} />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ================= DESKTOP ================= */}
      <motion.aside
        animate={{ width: collapsed ? 80 : 256 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex bg-white shadow-md min-h-screen flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between">
          {!collapsed && (
            <h1 className="text-xl font-bold text-red-600">
              Staff Panel
            </h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded hover:bg-gray-100"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-red-50 text-red-600 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Icon size={18} />

                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </motion.aside>
    </>
  );
}