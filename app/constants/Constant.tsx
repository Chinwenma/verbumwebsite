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

  { id: 5, label: "Projects", url: "/projects" },
  {id: 6, label: "Gallery", url: "/gallery" },

  {
    id: 7,
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
    url: "/services", // Optional URL for the button
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
    url: "https://verbumhealth.com/",
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
    desc: "Creating custom websites and apps that boost efficiency, engagement, and online presence.",
    body: "We develop matchless website solutions to increase the efficiency and competitive advantage of companies, institutions and organizations by providing them with a strong online presence. Our services include custom website design, e-commerce solutions, content management systems, and web application development.",
  },
  {
    id: 2,
    image: "/assets/a1muo-upgac.avif",
    title: "Networking & Internet",
    desc: "Reliable internet and networking solutions, even in remote areas using VSAT technology.",
    body: "Our VSAT internet is an Internet connection via satellite, which means it can be used anywhere in Nigeria, in remote locations where other forms of internet connection are not available. We also provide networking solutions including LAN/WAN setup, network security, and maintenance services.",
  },
  {
    id: 3,
    image: "/assets/aq31q-9poim.webp",
    title: "Solar installation",
    desc: "Designing and implementing tailored solar solutions for homes, businesses, and institutions.",
    body: "In an era where sustainable energy solutions are imperative, Verbum Networks Limited is at the forefront, offering state-of-the-art solar installation services. Our team of experts specializes in designing and implementing solar power systems tailored to meet the unique energy needs of homes, businesses, and institutions.",
  },
  {
    id: 4,
    image: "/assets/asizu-n23px.avif",
    title: "CCTV installation",
    desc: "Comprehensive CCTV and surveillance systems with reliable security and monitoring solutions.",
    body: "We offer complete computer-based CCTV/DVR, IP and WiFi surveillance systems with affordable rates. We also deploy PABX telephone systems, ensuring comprehensive security and communication solutions for our clients.",
  },
  {
    id: 5,
    image: "/assets/a0qrj-majls.avif",
    title: "Graphics design",
    desc: "High-quality graphic designs for digital, print, and marketing media to strengthen your brand.",
    body: "We design all ranges of graphic publications - for digital media, print, broadcast, etc., and we deliver high quality products. Our services include logo design, branding, marketing materials, and digital graphics that effectively communicate your message and enhance your brand identity.",
  },
  {
    id: 6,
    image: "/assets/a65qf-w8ee7.avif",
    title: "ICT education",
    desc: "Hands-on ICT training programs in web development, networking, and cybersecurity.",
    body: "Through its Technical Education Unit (CICOT), Verbum Networks offers various ICT Research and Training programs. We provide hands-on training in web development, networking, cybersecurity, and more, empowering individuals with the skills needed to thrive in the digital age.",
  },
  {
    id: 7,
    title: "Hardware Maintenance & IT Support",
    image: "/assets/maintain.png",
    desc: "Expert hardware maintenance and IT support to keep systems running smoothly.",
    body: "We offer professional hardware maintenance, repairs, and IT support services to ensure the smooth operation of your systems and equipment. Our team handles diagnostics, upgrades, and preventive maintenance for optimal performance. We also provide technical support, troubleshooting, and IT consulting to help businesses manage their technology infrastructure effectively.",
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
    title: "Basic Computer Training",
    description:
      "Learn the fundamentals of computer usage, including operating systems, software applications, and internet skills.",
    icon: "/assets/awr3a-3c47c.avif",
    details: `Duration: 6 weeks  
This beginner-friendly course introduces you to the core concepts of computer usage. You’ll learn how to operate a computer confidently, understand operating systems, and manage files and folders. The course also covers essential software such as Microsoft Word, Excel, and PowerPoint, teaching you how to create documents, spreadsheets, and presentations. Additionally, you’ll explore safe internet browsing, email communication, and basic troubleshooting techniques. By the end of this 6-week program, you’ll be able to handle everyday digital tasks efficiently and prepare yourself for advanced computer studies or office work.`,
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Master the art of visual communication using industry-standard design software like Adobe Photoshop and CorelDRAW.",
    icon: "/assets/graphc.jpg",
    details: `Duration: 6 weeks  
This hands-on course takes you into the world of visual communication and creativity. You’ll learn how to use top design tools like Canva, CorelDRAW, and Adobe Photoshop to produce professional-quality graphics. Topics include color theory, typography, layout design, branding, and image manipulation. You’ll also learn how to design logos, flyers, posters, and social media graphics. Each week features creative projects that help you build a professional design portfolio. By the end of this 6-week program, you’ll have the confidence and skills to take on real-world design jobs or launch your freelance career.`,
  },
  {
    id: 3,
    title: "Frontend Development",
    description:
      "Build interactive and responsive user interfaces using HTML, CSS, and JavaScript.",
    icon: "/assets/frontend.jpg",
    details: `Duration: 3 months  
This course introduces you to the building blocks of modern web design and development. You’ll start with HTML for structuring web content, CSS for styling, and JavaScript for interactivity. Through practical exercises, you’ll learn to build responsive layouts using CSS Flexbox and Grid, apply animations, and enhance user experiences. You’ll also explore modern tools like Git/GitHub for version control and frameworks such as React for building dynamic web applications. By the end of 3 months, you’ll be able to design and develop fully responsive websites that look great on all devices.`,
  },
  {
    id: 4,
    title: "Backend Development",
    description:
      "Power websites with server-side logic and database management.",
    icon: "/assets/backend.jpg",
    details: `Duration: 3 months  
This course focuses on the server side of web applications — where data is stored, processed, and managed. You’ll learn how to build scalable backend systems using Node.js, Express.js, and MongoDB. The course covers database design, authentication, API development, and deployment techniques. You’ll also work on projects that teach you how to integrate frontend applications with backend services and manage user data securely. By the end of this 3-month course, you’ll be able to build powerful backend infrastructures that support real-world web and mobile applications.`,
  },
  {
    id: 5,
    title: "Full Stack Web Development",
    description:
      "Become a versatile developer by mastering both frontend and backend technologies.",
    icon: "/assets/web1.avif",
    details: `Duration: 6 months  
This comprehensive program combines both frontend and backend development into one complete learning experience. You’ll begin by mastering HTML, CSS, and JavaScript before moving on to React for building dynamic user interfaces. Then, you’ll learn backend technologies such as Node.js, Express, and MongoDB to handle server-side logic and data management. You’ll also explore version control with Git, API integration, and deployment strategies. Over the course of 6 months, you’ll build multiple full-stack projects that demonstrate your ability to develop, connect, and deploy complete web applications from scratch.`,
  },
  {
    id: 6,
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences through design thinking.",
    icon: "/assets/hero-ui.jpg",
    details: `Duration: 3 months  
This course introduces the core principles of user interface (UI) and user experience (UX) design. You’ll learn to conduct user research, define personas, create wireframes, and build prototypes using tools such as Figma and Adobe XD. You’ll also gain insights into usability testing, accessibility design, and the psychology behind user interactions. Each module includes practical exercises that guide you through real-world design challenges. By the end of this 3-month course, you’ll be able to design digital products that are not only visually appealing but also user-centered and highly functional.`,
  },
  {
    id: 7,
    title: "Computer Networking",
    description:
      "Understand the fundamentals of computer networks, protocols, and security.",
    icon: "/assets/networking.jpg",
    details: `Duration: 3 months  
This course provides a thorough understanding of how computer networks operate. You’ll learn about network devices, cabling, IP addressing, and configurations. The program covers both local area networks (LAN) and wide area networks (WAN), including protocols like TCP/IP. You’ll also explore network troubleshooting, firewall configuration, and wireless networking. Hands-on labs and simulations help you practice real networking setups. By the end of the program, you’ll be equipped with the skills needed to build, maintain, and secure computer networks for personal or business use.`,
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
    name: "Rev. Fr. Magnus O Anyiam, OP.",
    role: "Director",
    image: "/assets/direct.jpeg",
  },
  {
    id: 2,
    name: "Engr. Paulinus O. Ezeh",
    role: "Admin Manager | HOD, Networking",
    image: "/assets/avqkr-kv2ew.avif",
  },
  {
    id: 3,
    name: "Ms Immaculata Uzendu",
    role: "Accountant",
    image: "/assets/Immaculata.png",
  },

  {
    id: 4,
    name: "Engr. Uchenna Marcel Obiefuna",
    role: "HOD, Web Development",
    image: "/assets/uche.jpg",
  },
  {
    id: 5,
    name: "Engr. Chinwenma Okorie",
    role: "Web Developer | Program Coordinator",
    image: "/assets/chinwenma.jpg",
  },
  {
    id: 6,
    name: "Eze Peculiar Chigaemezu",
    role: "Product Designer | Tutor",
    image: "/assets/Peculiar.png",
  },

  // {
  //   id: 7,
  //   name: "Kingsley Ejiofor",
  //   role: "IT Support officer",
  //   image: "/assets/Kingsely.png",
  // },
    {
    id: 7,
    name: "Frank Emmanuel ",
    role: "IT Support officer",
    image: "/assets/wap3.jpeg",
  },
    {
    id: 8,
    name: "Ezeh Oluchukwu Gloria",
    role: "Cafe Attendant",
    image: "/assets/wap2.jpeg",
  },
];
