"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ServiceItem {
  image: string;
  title: string;
  desc: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    image: "/assets/atpn9-27cm1.avif",
    title: "Website and app development",
    desc: "We develop matchless website solutions to increase the efficiency and competitive advantage of companies, institutions and organizations b...",
    link: "webdev.html",
  },
  {
    image: "/assets/a1muo-upgac.avif",
    title: "Networking & Internet",
    desc: "Our VSAT internet is an Internet connection via satellite, which means it can be used anywhere in Nigeria, in remote locations...",
    link: "networking.html",
  },
  {
    image: "/assets/aq31q-9poim.webp",
    title: "Solar installation",
    desc: "In an era where sustainable energy solutions are imperative, Verbum Networks Limited is at the forefront, offering state...",
    link: "solar.html",
  },
  {
    image: "/assets/asizu-n23px.avif",
    title: "CCTV installation",
    desc: "We offer complete computer-based CCTV/DVR, IP and WiFi surveillance systems with affordable rates. We also deploy PABX telep...",
    link: "cctv.html",
  },
  {
    image: "/assets/a0qrj-majls.avif",
    title: "Graphics design",
    desc: "We design all ranges of graphic publications - for digital media, print, broadcast, etc., and we deliver high quality products.",
    link: "graphics.html",
  },
  {
    image: "/assets/a65qf-w8ee7.avif",
    title: "ICT education",
    desc: "Through its Technical Education Unit (CICOT), Verbum Networks offers various ICT Research and Training programs.",
    link: "academy.html",
  },
];

const ServicesSection: FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[url('/assets/ay27i-1luvt.webp')] bg-cover bg-fixed bg-no-repeat bg-blend-overlay bg-[#7302022f] py-10 px-4 lg:px-[10%]"
    >
      {/* Title */}
      <motion.div
        className="flex flex-col items-center gap-2 mb-10 md:items-start md:ml-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl md:text-4xl font-semibold text-primary-dark font-serif drop-shadow-lg">
          Our Services
        </span>
        <span className="w-full max-w-xs h-[5px] bg-gray-200 rounded-md relative hidden md:block">
          <span className="absolute left-0 top-0 h-full w-[30%] bg-secondary rounded-r-md"></span>
        </span>
      </motion.div>

      {/* Service Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 w-full sm:w-[85%] md:w-[45%] lg:w-[30%] min-h-[350px] p-6 rounded-lg shadow hover:bg-gradient-to-br hover:from-[#020024] hover:to-[#244860] transition-all flex flex-col items-center gap-4 text-center hover:cursor-pointer hover:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={100}
              height={100}
              className="rounded-full object-cover w-[100px] h-[100px]"
            />
            <h3 className="text-xl font-semibold text-secondary-dark transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-secondary-dark max-w-xs">
              {service.desc}
            </p>
            <Link
              href={service.link}
              className="text-primary hover:text-gray-300 transition"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>

      {/* All Services Link */}
      <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center gap-4 mt-8">
        <Link href="/about">
          <button className="bg-[#ff0000] text-white hover:bg-red-600 transition-all 200  px-5 py-2 rounded-md">
            All Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
