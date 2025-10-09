"use client";
import Button from "../button/Button";
import { FC } from "react";
import { motion } from "framer-motion";
import { Code2, AppWindow, Atom, ShieldCheck } from "lucide-react";
const services = [
  {
    title: "Digital Services",
    description:
      "Our digital services cover everything from eye-catching web design and secure web hosting to custom web software development. We build fast, functional, and scalable solutions tailored to your business needs",
    icon: <Code2 size={24} />,
  },
  {
    title: "Installation Services",
    description:
      "We offer expert installation services including computer networking, CCTV systems, and solar solutions—delivering reliable and efficient tech infrastructure for your home or business.",
    icon: <AppWindow size={24} />,
  },
  {
    title: "Internet Services",
    description:
      "We provide reliable and high-speed internet solutions for homes, schools, and businesses—ensuring seamless connectivity and round-the-clock support.",
    icon: <Atom size={24} />,
  },
  {
    title: "ICT Education Services",
    description:
      "We provide ICT training from basic to advanced levels, covering computer fundamentals, graphic design, web development, digital marketing, cybersecurity, and more—empowering learners with in-demand tech skills.",
    icon: <ShieldCheck size={24} />,
  },
];

const ServicesSection: FC = () => {
  return (
    <section className="w-full px-4 py-16 bg-gray-200 text-justify leading-relaxed tracking-tight">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 text-center">
          Featured Services{" "}
        </h2>
        <p className=" font-serif font-normal text-gray-700 text-center mb-12 max-w-2xl mx-auto leading-relaxed tracking-wider">
          From web and app development to networking, solar installation, and
          ICT training, our services are designed to power your growth and
          productivity.{" "}
        </p>
      </motion.div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-gradient-to-tr from-white via-red-100 to-white p-6 hover:shadow-xl transition hover:cursor-pointer "
          >
            <div className="flex items-center justify-center mb-4 ">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white ">
                {service.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed tracking-wider">{service.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center gap-4 mt-8">
        <Button link="/services" label="View All Services" />
      </div>
    </section>
  );
};

export default ServicesSection;

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { FC } from "react";
// import Button from "../button/Button";

// import { services } from "@/app/constants/Constant";
// const ServicesSection: FC = () => {
//   return (
//     <section
//       id="services"
//       className="w-full bg-[url('/assets/ay27i-1luvt.webp')] bg-cover bg-fixed bg-no-repeat bg-blend-overlay bg-[#7302022f] py-10 px-4 lg:px-[10%]"
//     >
//       {/* Title */}
//       <div className="flex flex-col items-center gap-2 mb-10 md:items-start md:ml-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <span className="text-3xl md:text-4xl font-semibold text-[#8f0000] font-serif drop-shadow-lg">
//             Featured Services
//           </span>
//           <span className="w-full max-w-lg h-[5px] bg-[#d7e6ef] rounded-md relative hidden md:block">
//             <span className="absolute left-0 top-0 h-full w-[30%] bg-[#5484ab] rounded-r-md"></span>
//           </span>
//         </motion.div>
//       </div>

//       {/* Service Cards */}
//       <div className="flex flex-wrap justify-center items-center gap-6">
//         {services.map((service, index) => (
//           <div
//             key={service.title}
//             className="bg-gray-100 w-full sm:w-[85%] md:w-[45%] lg:w-[30%] min-h-[350px] p-6 rounded-lg shadow hover:bg-gradient-to-br hover:from-[#020024] hover:to-[#244860] transition-all flex flex-col items-center text-center hover:cursor-pointer hover:text-white"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="flex flex-col items-center justify-center gap-4"
//             >
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 width={100}
//                 height={100}
//                 className="rounded-full object-cover w-[100px] h-[100px]"
//               />
//               <h3 className="text-xl font-semibold text-secondary-dark">
//                 {service.title}
//               </h3>
//               <p className="text-sm text-secondary-dark max-w-xs">
//                 {service.desc}
//               </p>
//               <Link
//                 href={service.link}
//                 className="text-[#ff0000] hover:text-gray-300 transition"
//               >
//                 Learn More
//               </Link>
//             </motion.div>
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center gap-4 mt-8">
//         <Button link="/services" label="View All Services" />
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
