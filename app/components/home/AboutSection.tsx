"use client";

import Image from "next/image";
import Button from "../button/Button";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-[#d7e6ef]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-secondary-light">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
        
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-red-500 text-transparent bg-clip-text">
            Get to know Verbum Networks limited
          </h2>
          <p className="text-gray-900 mb-6">
            Verbum Networks is an Information and Communications Technology
            Solutions Provider, owned and managed by the Dominican Fathers and
            Brothers of Nigeria and Ghana. The firm is licensed by the Nigerian
            Communication Commission to provide for the general public, Wireless
            Internet Services.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* <div className="mt-6 flex gap-4 flex-wrap justify-center"> */}
            <Button
              link="/about"
              label="Learn More"
              className="sm:w-auto transition duration-300"
            />
          </div>
        </motion.div>

        {/* Image Section with Animation */}
        <div className="relative w-full h-64 md:h-[400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/hero-img.jpg"
              alt="Engineer working on solar panels"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
