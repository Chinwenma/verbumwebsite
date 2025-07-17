'use client';

import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';
import {testimonials} from "@/app/constants/Constant"

const TestimonialSection: FC = () => {
  return (
    <section className="w-full bg-primary-dark bg-[#8f0000] py-12 px-4">
      <div className="text-center mb-10">
        <p className="text-gray-100 font-sans text-base">What people are saying about us</p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white">Testimonials</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <motion.div    initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: testimonial.id * 0.2 }}>
          <div
            key={testimonial.id}
         
            className="bg-transparent w-[300px] md:w-[350px] flex flex-col items-center"
          >
            <div className="relative w-[150px] h-[150px]">
              <div className="absolute -bottom-2 -left-2 w-[170px] h-[160px] bg-white rounded-[33%_67%_50%_50%_/_50%_14%_86%_50%] z-[-1] shadow-lg" />
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>

            <div className="text-center mt-6 space-y-4">
              <p className="text-sm text-gray-100 relative px-4">

                <span className="text-5xl text-secondary font-serif absolute -top-4 left-2  text-red-500">“</span>
                {testimonial.text}
                 
                <span className="text-5xl text-secondary  text-red-500 font-serif absolute -bottom-4 right-2">”</span>
              </p>
              <div>
                <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
