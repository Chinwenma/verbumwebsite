"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { servicess } from "@/app/constants/Constant";
import PageBanner from "../components/pagebanner/PageBanner";
const ServicesPage: FC = () => {
  return (
    <div>
    <PageBanner
        title="About Us"
        subtitle="Learn more about our mission and values"
        backgroundImage="/assets/a1fiy-v6plo.avif"
      />
    <section
      id="services"
      className="w-full bg-[url('/assets/ay27i-1luvt.webp')] bg-cover bg-fixed bg-no-repeat bg-blend-overlay bg-[#7302022f] py-10 px-4 lg:px-[10%]"
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-2 mb-10 md:items-start md:ml-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-3xl md:text-4xl font-semibold text-[#8f0000] font-serif drop-shadow-lg">
            All Services
          </span>
          <span className="w-full max-w-lg h-[5px] bg-[#d7e6ef] rounded-md relative hidden md:block">
            <span className="absolute left-0 top-0 h-full w-[30%] bg-[#5484ab] rounded-r-md"></span>
          </span>
       
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {servicess.map((service, index) => (
          <div
            key={service.title}
            className="bg-gray-100 w-full sm:w-[85%] md:w-[45%] lg:w-[30%] min-h-[350px] p-6 rounded-lg shadow hover:bg-gradient-to-br hover:from-[#020024] hover:to-[#244860] transition-all flex flex-col items-center text-center hover:cursor-pointer hover:text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="rounded-full object-cover w-[100px] h-[100px]"
              />
              <h3 className="text-xl font-semibold text-secondary-dark">
                {service.title}
              </h3>
              <p className="text-sm text-secondary-dark max-w-xs">
                {service.desc}
              </p>
              <Link
                href={`/services/${service.id}`}
                className="text-[#ff0000] hover:text-gray-300 transition"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
     </div>
  );
};

export default ServicesPage;
