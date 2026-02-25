export interface ClientProject {
  id: number;
  title: string;
  client: string;
  status: ProjectStatus;
  projectDescription: string;
  startDate: Date;
  deadline: Date;
  budget: number;
  amountPaid: number;
}

export type ProjectStatus =
  | "in_progress"
  | "completed"
  | "on_hold"
  | "cancelled";



export const clientProjects: ClientProject[] = [
  {
    id: 1,
    title: "website Maintenance",
    client: "Acme Corp",
    status: "in_progress",
    projectDescription: "Maintaining the company's website.",
    startDate: new Date("2023-01-01"),
    deadline: new Date("2023-12-31"),
    budget: 5000,
    amountPaid: 2500
  },
  {
    id: 2,
    title: "Mobile App Development",
    client: "Beta Inc", 
    status: "completed",
    projectDescription: "Developing a mobile app for the client.",
    startDate: new Date("2022-06-01"),
    deadline: new Date("2023-01-31"),
    budget: 20000,
    amountPaid: 20000
  },  
  {
    id: 3,
    title: "E-commerce Platform",
    client: "Gamma Ltd",
    status: "on_hold",
    projectDescription: "Building an e-commerce platform for the client.",
    startDate: new Date("2023-03-01"),
    deadline: new Date("2023-09-30"),
    budget: 15000,
    amountPaid: 7500
  } ,
  {
    id: 4,
    title: "SEO Optimization",
    client: "Delta Co",
    status: "cancelled",
    projectDescription: "Optimizing the client's website for search engines.",
    startDate: new Date("2023-02-01"),
    deadline: new Date("2023-08-31"),
    budget: 3000,
    amountPaid: 0
  },
  {
  id: 5,
  title: "Corporate Website Redesign",
  client: "Nova Energy",
  status: "in_progress",
  projectDescription: "Redesigning and modernizing the corporate website.",
  startDate: new Date("2023-04-10"),
  deadline: new Date("2023-10-15"),
  budget: 8000,
  amountPaid: 4000
},
{
  id: 6,
  title: "Office Network Infrastructure Setup",
  client: "Prime Logistics",
  status: "completed",
  projectDescription: "Structured cabling, router configuration and LAN setup.",
  startDate: new Date("2022-09-01"),
  deadline: new Date("2022-10-15"),
  budget: 12000,
  amountPaid: 12000
},
{
  id: 7,
  title: "Solar Power Installation - 20KVA",
  client: "GreenField Schools",
  status: "in_progress",
  projectDescription: "Installation of 20KVA solar inverter system with battery backup.",
  startDate: new Date("2023-05-01"),
  deadline: new Date("2023-07-30"),
  budget: 35000,
  amountPaid: 20000
},
{
  id: 8,
  title: "ISP Wireless Deployment",
  client: "SkyNet Broadband",
  status: "completed",
  projectDescription: "Deployment of wireless access points across 3 estates.",
  startDate: new Date("2022-03-01"),
  deadline: new Date("2022-06-01"),
  budget: 45000,
  amountPaid: 45000
},
{
  id: 9,
  title: "School Management System",
  client: "Bright Future Academy",
  status: "in_progress",
  projectDescription: "Fullstack school portal with student dashboard and payments.",
  startDate: new Date("2023-06-15"),
  deadline: new Date("2023-12-01"),
  budget: 18000,
  amountPaid: 9000
},
{
  id: 10,
  title: "Data Center Rack Installation",
  client: "TechCore Ltd",
  status: "completed",
  projectDescription: "Server rack mounting and network switch configuration.",
  startDate: new Date("2022-11-01"),
  deadline: new Date("2022-11-20"),
  budget: 10000,
  amountPaid: 10000
},
{
  id: 11,
  title: "Fiber Optic Network Expansion",
  client: "MetroLink ISP",
  status: "on_hold",
  projectDescription: "Expanding fiber backbone to new residential area.",
  startDate: new Date("2023-02-01"),
  deadline: new Date("2023-08-01"),
  budget: 60000,
  amountPaid: 30000
},
{
  id: 12,
  title: "Solar Street Light Deployment",
  client: "City Council",
  status: "completed",
  projectDescription: "Installation of 50 solar-powered street lights.",
  startDate: new Date("2022-05-01"),
  deadline: new Date("2022-07-15"),
  budget: 70000,
  amountPaid: 70000
},
{
  id: 13,
  title: "E-Learning Platform",
  client: "SkillUp Institute",
  status: "in_progress",
  projectDescription: "Online learning platform with video streaming and exams.",
  startDate: new Date("2023-07-01"),
  deadline: new Date("2024-01-15"),
  budget: 25000,
  amountPaid: 15000
},
{
  id: 14,
  title: "Enterprise Firewall Configuration",
  client: "SecureBank Ltd",
  status: "completed",
  projectDescription: "Deployment and configuration of enterprise-grade firewall.",
  startDate: new Date("2022-08-01"),
  deadline: new Date("2022-08-25"),
  budget: 15000,
  amountPaid: 15000
},
{
  id: 15,
  title: "Hybrid Solar + Generator Integration",
  client: "Royal Hospital",
  status: "in_progress",
  projectDescription: "Integrating solar system with existing diesel generator.",
  startDate: new Date("2023-03-10"),
  deadline: new Date("2023-09-10"),
  budget: 50000,
  amountPaid: 25000
},
{
  id: 16,
  title: "Company Intranet Portal",
  client: "Vertex Group",
  status: "completed",
  projectDescription: "Internal company portal with HR and payroll features.",
  startDate: new Date("2022-01-15"),
  deadline: new Date("2022-04-30"),
  budget: 22000,
  amountPaid: 22000
},
{
  id: 17,
  title: "CCTV & Network Security Setup",
  client: "Mega Warehouse",
  status: "in_progress",
  projectDescription: "Installation of CCTV cameras and secured LAN setup.",
  startDate: new Date("2023-05-20"),
  deadline: new Date("2023-08-20"),
  budget: 27000,
  amountPaid: 12000
},
{
  id: 18,
  title: "Hotel Booking Website",
  client: "Grand Palace Hotel",
  status: "completed",
  projectDescription: "Responsive booking website with payment integration.",
  startDate: new Date("2022-06-01"),
  deadline: new Date("2022-09-01"),
  budget: 14000,
  amountPaid: 14000
},
{
  id: 19,
  title: "Campus WiFi Deployment",
  client: "National Polytechnic",
  status: "on_hold",
  projectDescription: "Deployment of campus-wide wireless access points.",
  startDate: new Date("2023-01-01"),
  deadline: new Date("2023-12-31"),
  budget: 80000,
  amountPaid: 30000
},
{
  id: 20,
  title: "Solar Battery Upgrade Project",
  client: "Sunrise Apartments",
  status: "cancelled",
  projectDescription: "Upgrading lithium battery storage capacity.",
  startDate: new Date("2023-04-01"),
  deadline: new Date("2023-06-30"),
  budget: 18000,
  amountPaid: 5000
}                                                 
];

