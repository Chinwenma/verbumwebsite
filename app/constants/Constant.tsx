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
    role: 'Admin Manager',
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
    name: 'Engr. Paulinus O. Ezeh',
    role: 'HOD, Networking',
    image: '/assets/avqkr-kv2ew.avif',
  },
  {
    id: 5,
    name: 'Engr. Uchenna Marcel Obiefuna',
    role: 'HOD, Web Development',
    image: '/assets/alyr5-oz1r6.avif',
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
    name: 'Ms Chinwenma Okorie',
    role: 'HOD, Marketing',
    image: '/assets/alyr5-oz1r6.avif',
  },
    {
      id: 9,
    name: 'Ms Chinwenma Okorie',
    role: 'HOD, Marketing',
    image: '/assets/alyr5-oz1r6.avif',
  },
    {
      id: 10,
    name: 'Ms Chinwenma Okorie',
    role: 'HOD, Marketing',
    image: '/assets/alyr5-oz1r6.avif',
  },
  
];