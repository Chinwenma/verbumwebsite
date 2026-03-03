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
  LogOut,           // ← new icon
} from "lucide-react";
import { signOut } from "next-auth/react";   // ← import this
import { Role } from "@/models/User";
import { routeAccessMap } from "@/lib/route-access";

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

export function Sidebar({ role }: { role: Role }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleNavItems = navItems.filter((item) =>
    routeAccessMap[item.href]?.includes(role)
  );

  const handleLogout = () => {
    signOut();
  };

  const renderNavLink = (item: typeof navItems[number], isMobile = false) => {
    const Icon = item.icon;
    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

    const baseClasses = `
      flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
      ${isActive
        ? "bg-red-50 text-red-600 font-medium"
        : "hover:bg-gray-100 text-gray-700"
      }
    `;

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={isMobile ? () => setMobileOpen(false) : undefined}
        className={baseClasses}
      >
        <Icon size={18} />
        {(!collapsed || isMobile) && <span>{item.name}</span>}
      </Link>
    );
  };

  return (
    <>
      {/* ─── Mobile ──────────────────────────────────────── */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-4 bg-white border-b">
          <button onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setMobileOpen(false)}
              />

              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-0 left-0 w-72 h-full bg-white shadow-2xl z-50 overflow-y-auto"
              >
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-xl font-bold text-red-600">Staff Panel</h2>
                  <button onClick={() => setMobileOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                <nav className="p-4 space-y-1.5 flex flex-col h-[calc(90vh-140px)]">
                  <div className="flex-1 space-y-1.5">
                    {visibleNavItems.map((item) => renderNavLink(item, true))}
                  </div>

                  {/* Logout button – mobile */}
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 mt-4 transition-all duration-200 font-medium"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Desktop ─────────────────────────────────────── */}
      <motion.aside
        animate={{ width: collapsed ? 80 : 256 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="hidden md:flex bg-white shadow-md max-h-screen flex-col border-r"
      >
        {/* Header */}
        <div className="p-5 border-b flex items-center justify-between">
          {!collapsed && (
            <h1 className="text-xl font-bold text-red-600 tracking-tight">
              Staff Panel
            </h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation + Logout at bottom */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
            {visibleNavItems.map((item) => renderNavLink(item))}
          </nav>

          {/* Logout button – desktop */}
          <div className="p-4 border-t mt-auto">
            <button
              onClick={handleLogout}
              className={`
                flex items-center gap-3 px-4 py-2 rounded-lg w-full
                text-red-600 hover:bg-red-50 transition-all duration-200 font-medium
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <LogOut size={18} />
              {!collapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}