"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/assets/hero-graphic.jpg",
    title: "Discover Electric Freedom",
    subtitle: "Drive into the future with our EVs.",
    buttonText: "Explore Cars",
  },
  {
    image: "/assets/hero-network.jpg",
    title: "Luxury, Redefined",
    subtitle: "Experience comfort like never before.",
    buttonText: "Book a Test Drive",
  },
  {
    image: "/assets/hero-web.jpg",
    title: "Off-Road Adventures",
    subtitle: "Conquer any terrain, any time.",
    buttonText: "See SUVs",
  },
  {
    image: "/assets/hero-img.jpg",
    title: "Smart Cars, Smarter You",
    subtitle: "Technology meets performance.",
    buttonText: "View Features",
  },
  {
    image: "/assets/hero22.jpg",
    title: "Family First, Always",
    subtitle: "Spacious rides for everyone.",
    buttonText: "Check Family Cars",
  },
  {
    image: "/assets/hero-ui.jpg",
    title: "Fuel Efficiency King",
    subtitle: "Save more with every mile.",
    buttonText: "Compare Models",
  },
];

const variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Hero() {
  // ✅ Correct state declaration with typing
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 1]);

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
    <section className="relative  h-[50vh] md:h-screen w-full overflow-hidden">
      {/* Animated Image Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].image}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
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
            <button className="inline-flex items-center gap-2   text-gray-300 mt-4 bg-primary font-sans px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-all capitalize duration-300 ease-in-out">
              {slides[current].buttonText}
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
        </AnimatePresence>
      </div>
        {/* Pagination Dots */}
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
