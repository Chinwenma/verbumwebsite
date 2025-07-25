export interface NavLink {
  id: number;
  label: string;
  url: string;
}
// constants/navLinks.ts
export const navLinks: NavLink[] = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About", url: "/about" },

  { id: 3, label: "Services", url: "/services" },

  { id: 4, label: "Courses", url: "/courses" },

  { id: 5, label: "Blog", url: "/blog" },

  {
    id: 6,
    label: "Contact",
    url: "/contact",
  },
];

export interface Testimony {
  id: number; // Optional for flexibility
  name: string;
  role: string;
  text: string;
  image: string;
}

export const testimonials: Testimony[] = [
  {
    id: 1,
    name: "Odezulu Lydia",
    role: "Web development",
    text: "Serene environment, Great tutors, mind builders and goal driven personnels. These are my words when describing Verbum Networks.",
    image: "/assets/ap5kz-fk6fb.jpg",
  },
  {
    id: 2,
    name: "MSRH",
    role: "Website and Management",
    text: "The website that they developed for us is so professional and wonderful. Kudos to the entire Verbum Networks team.",
    image: "/assets/mshr.jpg",
  },
  {
    id: 3,
    name: "Michael",
    role: "Web Design",
    text: "Learning with Verbum Networks made me have a great insight on how to solve real world problems and generate income.",
    image: "/assets/a0ok4-4jx8p.jpg",
  },
];

export interface Slide {
  id: number; 
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  url: string; // Optional URL for the button
}

export const slides: Slide[] = [
  {
    id: 1,
    image: "/assets/hero-graphic.jpg",
    title: "Build Professional Websites with Confidence",
    subtitle:
      " Learn to create fast, responsive, and user-friendly websites using modern web technologies and frameworks.",
    buttonText: "Explore Courses",
    url: "/courses", // Optional URL for the button
  },
  {
    id: 2,
    image: "/assets/backend.jpg",
    title: "Learn to Build Powerful Server-Side Applications",
    subtitle:
      " Gain backend skills using Node.js, Express, MongoDB, and APIs to power dynamic, data-driven apps.",
    buttonText: "Enroll Now",
    url:"/services", // Optional URL for the button
  },
  {
    id: 3,
    image: "/assets/hero1-network.jpg",
    title: "Power Up with Networking Skills",
    subtitle:
      "Learn how to set up, manage, and troubleshoot computer networks for homes, offices, and enterprise systems.",
    buttonText: "Register Now",
    url: "/courses", // Optional URL for the button
  },
  {
    id: 4,
    image: "/assets/dash.png",
    title: "Simplify Hospital Operations with HMS",
    subtitle:
      "Manage patients, staff, appointments, billing, inventory, and reports—all in one seamless, automated hospital management system.",
    buttonText: "View Features",
    url: "/services", // Optional URL for the button
  },
  {
    id: 5,
    image: "/assets/frontend.jpg",
    title: " Become a Frontend Developer with Real Skills",
    subtitle:
      " Build sleek and interactive user interfaces using HTML, CSS, JavaScript, React, Tailwind CSS, and more.",
    buttonText: "Explore Courses",
    url: "/courses", // Optional URL for the button
  },
  {
    id: 6,
    image: "/assets/hero1-ui.jpg",
    title: "Design Intuitive Interfaces that Users Love",
    subtitle:
      "Gain hands-on experience in wireframing, prototyping, and creating seamless user journeys for web and mobile apps.",
    buttonText: "Explore",
    url: "/services", // Optional URL for the button
  },
];

interface ServiceItem {
  id: number; 
  image: string;
  title: string;
  desc: string;
  body: string; 
}

export const servicess: ServiceItem[] = [
  {
    id: 1,
    image: "/assets/atpn9-27cm1.avif",
    title: "Website and app development",
    desc: "We develop matchless website solutions to increase the efficiency and competitive advantage of companies, institutions and organizations b...",
    body: "We develop matchless website solutions to increase the efficiency and competitive advantage of companies, institutions and organizations by providing them with a strong online presence. Our services include custom website design, e-commerce solutions, content management systems, and web application development.",
  },
  {
    id: 2,
    image: "/assets/a1muo-upgac.avif",
    title: "Networking & Internet",
    desc: "Our VSAT internet is an Internet connection via satellite, which means it can be used anywhere in Nigeria, in remote locations...",
    body: "Our VSAT internet is an Internet connection via satellite, which means it can be used anywhere in Nigeria, in remote locations where other forms of internet connection are not available. We also provide networking solutions including LAN/WAN setup, network security, and maintenance services.", 
  },
  {
    id: 3,
    image: "/assets/aq31q-9poim.webp",
    title: "Solar installation",
    desc: "In an era where sustainable energy solutions are imperative, Verbum Networks Limited is at the forefront, offering state...",
    body: "In an era where sustainable energy solutions are imperative, Verbum Networks Limited is at the forefront, offering state-of-the-art solar installation services. Our team of experts specializes in designing and implementing solar power systems tailored to meet the unique energy needs of homes, businesses, and institutions.",
  },
  {
    id: 4,
    image: "/assets/asizu-n23px.avif",
    title: "CCTV installation",
    desc: "We offer complete computer-based CCTV/DVR, IP and WiFi surveillance systems with affordable rates. We also deploy PABX telep...",
    body: "We offer complete computer-based CCTV/DVR, IP and WiFi surveillance systems with affordable rates. We also deploy PABX telephone systems, ensuring comprehensive security and communication solutions for our clients.",
  },
  {
      id: 5,
    image: "/assets/a0qrj-majls.avif",
    title: "Graphics design",
    desc: "We design all ranges of graphic publications - for digital media, print, broadcast, etc., and we deliver high quality products.",
    body: "We design all ranges of graphic publications - for digital media, print, broadcast, etc., and we deliver high quality products. Our services include logo design, branding, marketing materials, and digital graphics that effectively communicate your message and enhance your brand identity.",
  },
  {
id: 6,
    image: "/assets/a65qf-w8ee7.avif",
    title: "ICT education",
    desc: "Through its Technical Education Unit (CICOT), Verbum Networks offers various ICT Research and Training programs.",
    body: "Through its Technical Education Unit (CICOT), Verbum Networks offers various ICT Research and Training programs. We provide hands-on training in web development, networking, cybersecurity, and more, empowering individuals with the skills needed to thrive in the digital age.",
  },
];
export type Courses = {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string;
};
export const coursesCard: Courses[] = [
  {
    id: 1,
    title: "Patient Management",
    description:
      "Easily manage patient records, history, and visits from one dashboard.",
    icon: "/assets/photo3.jpg",
    details: `Our Patient Management module offers a centralized platform to access, update, and organize patient information in real-time. You can securely store medical histories, allergies, diagnoses, and more in a structured and intuitive interface. It reduces manual paperwork and enhances collaboration among departments by keeping patient data synchronized and accessible across the hospital system. Staff can efficiently track patient journeys and history to ensure continuity of care. The module supports unique patient IDs, search filters, and real-time updates, ensuring that the right information is always available to authorized personnel. It is compliant with data privacy regulations to ensure maximum security.`,
  },
  {
    id: 2,
    title: "Appointments & Scheduling",
    description:
      "Automate doctor appointments, notifications, and calendar management.",
    icon: "/assets/ok.jpg",
    details: `The Appointment Scheduling feature streamlines the process of booking and managing appointments for doctors, labs, and services. Patients can easily book slots via mobile or web, while hospital staff can view and manage schedules efficiently.Automatic reminders and notifications reduce no-shows and improve patient engagement. Doctors and nurses receive real-time updates on their daily calendar, making time management more effective.The system supports walk-ins, follow-ups, cancellations, and rescheduling, making it a flexible solution for both small clinics and large hospitals. Integration with electronic health records ensures all appointments are context-aware.`,
  },
  {
    id: 3,
    title: "Medical Records",
    description:
      "Maintain secure and accessible digital medical records and lab reports.",
    icon: "/assets/img4.jpg",
    details: `Digital medical records provide a secure and paperless way to store and retrieve patient health data. This module includes prescriptions, diagnoses, lab reports, radiology images, treatment plans, and other key documents. All records are encrypted and stored in the cloud, ensuring both safety and accessibility from any authorized device. Doctors can quickly access historical data during consultations for better decision-making.Role-based access ensures that only the right personnel view or edit sensitive information. The system supports version control and audit logs to maintain data integrity and accountability.`,
  },
  {
    id: 4,
    title: "Billing & Invoicing",
    description:
      "Handle payments, invoices, and receipts with ease and transparency.",
    icon: "/assets/img6.jpg",
    details: `The Billing & Invoicing module automates the financial side of hospital management, covering services, medications, consultations, and insurance claims. It generates accurate invoices and receipts instantly.It supports multiple payment gateways, split billing, and insurance processing, allowing for a seamless financial experience for both patients and hospital staff. All transactions are recorded and auditable.
      You can set pricing rules based on patient categories (e.g., senior citizens, insured) and generate financial reports to track revenue and outstanding balances. This helps in improving cash flow and transparency.`,
  },
  {
    id: 5,
    title: "Doctor & Staff Dashboard",
    description:
      "Empower staff with role-based access, duties, and reporting tools.",
    icon: "/assets/img7.jpg",
    details: `This dashboard gives doctors, nurses, and administrative staff a personalized view of their responsibilities. Doctors can view their schedules, appointments, patients’ records, and write prescriptions from one dashboard.
  
  Administrative staff can manage patient admissions, discharges, inventory, and staff shifts. It simplifies internal communication and ensures everyone has the right tools for their role.
  
  With role-based access control, the dashboard ensures each staff member sees only what's relevant to them. Reports and analytics offer insight into performance, enabling better planning and accountability.`,
  },
  {
    id: 6,
    title: "Hospital Analytics",
    description:
      "View insightful analytics and reports to improve hospital efficiency.",
    icon: "/assets/img8.jpeg",
    details: `The Hospital Analytics module turns raw data into actionable insights. From patient inflow trends to revenue tracking, it provides real-time dashboards to help administrators make data-driven decisions.
  
  You can monitor key performance indicators (KPIs) such as average wait times, patient satisfaction, and treatment success rates. The visual reports help identify bottlenecks and optimize operations.
  
  This module supports exporting reports to PDF/Excel and integrates with third-party BI tools. It's ideal for board meetings, audits, and long-term planning. Ultimately, it helps the hospital run smarter, not harder.`,
  },
];




interface TeamMember {
  id: number; // Optional for flexibility
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Rev. Chukwu Paul Emmanuel, OP',
    role: 'Director',
    image: '/assets/ahsbf-k01y6.avif',
  },
  {
    id: 2,
    name: 'Engr. Paulinus O. Ezeh',
    role: 'Admin Manager & HOD, Networking',
    image: '/assets/avqkr-kv2ew.avif',
  },
   {
    id: 3,
    name: 'Ms Immaculata Uzendu',
    role: 'Accountant',
    image: '/assets/alyr5-oz1r6.avif',
  },
  

  {
    id: 4,
    name: 'Engr. Uchenna Marcel Obiefuna',
    role: 'HOD, Web Development',
    image: '/assets/alyr5-oz1r6.avif',
  },
   {
    id: 5,
    name: 'Ms Chinwenma Okorie',
    role: 'HOD, Marketing',
    image: '/assets/chinwenma.jpg',
  },
    {
      id: 6,
    name: 'Ms Chinwenma Okorie',
    role: 'HOD, Marketing',
    image: '/assets/alyr5-oz1r6.avif',
  },
    {
      id: 7,
    name: 'Ms Chinwenma Okorie',
    role: 'HOD, Marketing',
    image: '/assets/alyr5-oz1r6.avif',
  },
    {
      id: 8,
    name: 'Kingsley Ejiofor',
    role: 'Cafe Attendant',
    image: '/assets/alyr5-oz1r6.avif',
  },
    {
      id: 9,
    name: 'Kosisochukwu Nwankwo',
    role: 'Web Developer',
    image: '/assets/kaosi.jpg',
  },
  
];