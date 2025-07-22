'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button  from '../button/Button';
import { team } from "@/app/constants/Constant";

const TeamSection: FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 py-10 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-serif font-semibold text-red-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Team
      </motion.h2>

      <div className="w-full flex flex-wrap justify-center gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="w-[90%] sm:w-[45%] lg:w-[22%] flex flex-col items-center text-center p-4 hover:shadow-md rounded-lg transition"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover border-2 border-red-700"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
           
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
       
        <Button link="/about" label="View All"  />
      </motion.div>
    </section>
  );
};

export default TeamSection;
