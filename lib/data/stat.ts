// lib/dashboard-data.ts

export interface StatItem {
  title: string;
  value: number;
  icon: "clients" | "web" | "network" | "students";
}

export const stats: StatItem[] = [
  {
    title: "Total Clients",
    value: 120,
    icon: "clients",
  },
  {
    title: "Web Clients",
    value: 45,
    icon: "web",
  },
  {
    title: "Networking Clients",
    value: 30,
    icon: "network",
  },
  {
    title: "Students",
    value: 80,
    icon: "students",
  },
];
