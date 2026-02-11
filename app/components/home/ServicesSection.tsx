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
        <p className="font-normal text-gray-700 text-center mb-8 max-w-2xl mx-auto leading-relaxed tracking-wider">
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
            <h3 className="text-lg font-semibold my-2 text-center">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-normal tracking-tight">{service.description}</p>
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

