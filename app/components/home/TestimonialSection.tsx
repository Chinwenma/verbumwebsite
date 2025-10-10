"use client";

import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/app/constants/Constant";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Detect screen width to adjust number of items per slide
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize(); // Set on first render
    window.addEventListener("resize", handleResize); // Listen for changes

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTestimonials = () => {
    const start = currentSlide * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="w-full bg-[#8f0000] py-12 px-4 relative">
     <motion.div initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}> 
      <h2
        className="text-3xl md:text-4xl font-serif font-semibold text-gray-100 text-center"
        
      >
      Testimonials
      </h2>
      <p className=" font-serif font-normal text-gray-100 text-center mb-12 max-w-2xl mx-auto">Our commitment to excellence has earned us the trust and appreciation of clients, partners, and learners alike. Discover their stories and successes. </p>
        </motion.div>

      <div className="relative flex flex-col items-center">
        {/* Left Icon */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/3 -translate-y-1/2 z-10 bg-red-700 hover:bg-red-600 p-3 rounded-full text-white shadow-lg"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {getCurrentTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-transparent w-full max-w-[350px] flex flex-col items-center"
              >
                <div className="relative w-[150px] h-[150px]">
                  <div className="absolute -bottom-2 -left-2 w-[170px] h-[160px] bg-white rounded-[33%_67%_50%_50%_/_50%_14%_86%_50%] z-[-1] shadow-lg " />
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full border-4 border-yellow-300 shadow-md"
                  />
                </div>

                <div className="text-center mt-6 space-y-4">
                  <p className="text-sm text-gray-100 relative px-4">
                    <span className="text-5xl absolute -top-4 left-2 text-red-500 font-serif">
                      “
                    </span>
                    {testimonial.text}
                    <span className="text-5xl absolute -bottom-4 right-2 text-red-500 font-serif text-justify">
                      ”
                    </span>
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Right Icon */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/3 -translate-y-1/2 z-10 bg-red-700 hover:bg-red-600 p-3 rounded-full text-white shadow-lg"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
