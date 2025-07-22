"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../button/Button";

import { slides } from "@/app/constants/Constant";

const variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Hero() {
  const [[current], setCurrent] = useState<[number, number]>([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index === current) return;
    const dir = index > current ? 1 : -1;
    setCurrent([index, dir]);
  };

  return (
    <section className="relative  h-[75vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <div className="absolute inset-0 w-full h-full">
            <motion.div
              key={slides[current].image}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
            >
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                fill
                priority
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-black/50" /> */}
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      <div className="h-full flex justify-center items-center px-4 mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 md:p-12 text-center text-white max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold ">
                {slides[current].title}
              </h1>
              <p className="mt-4 text-base md:text-lg text-pretty">
                {slides[current].subtitle}
              </p>
               <Button link={slides[current].url} label={slides[current].buttonText} className="mt-4"/>
             
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-red-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
