"use client";

import { stats } from "@/lib/data/stat";
import { motion } from "framer-motion";
import { Users, Globe, Network, GraduationCap } from "lucide-react";

const iconMap = {
  clients: Users,
  web: Globe,
  network: Network,
  students: GraduationCap,
};

export default function Home() {
  return (
    <main className="p-4 sm:p-6 md:p-8 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
                </div>

                <div className="bg-red-100 p-3 rounded-xl">
                  <Icon className="text-red-600" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
