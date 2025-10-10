"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

import { motion } from "framer-motion";
import { coursesCard } from "../constants/Constant";
import PageBanner from "../components/pagebanner/PageBanner";

const CoursesPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<
    (typeof coursesCard)[0] | null
  >(null);

  const openModal = (course: (typeof  coursesCard)[0]) => {
    setSelectedFeature(course);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section id="features" className="py-10 bg-gray-100">
      <PageBanner
       title="          Our Courses – Learn, Build, Excel
"
        subtitle="At Verbum Networks Limited, we offer a variety of hands-on ICT training programs designed to help you master in-demand tech skills"
        backgroundImage="/assets/a1fiy-v6plo.avif"
      />
      <div className="container mx-auto px-4 mt-4 md:mt-12">
        {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 font-bold tracking-wide mb-8 bg">
          Our Courses – Learn, Build, Excel


        </h2>
        <p className="text-color text-center mb-12 max-w-3xl mx-auto">
         At Verbum Networks Limited, we offer a variety of hands-on ICT training programs designed to help you master in-demand tech skills
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          { coursesCard.map((course, index) => (
            <motion.div
              key={course.id}
              onClick={() => openModal(course)}
              className="cursor-pointer flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-center">
                <Image
                  src={course.icon}
                  alt={course.title}
                  height={200}
                  width={200}
                  loading="lazy"
                  sizes="100vw"
                  className="w-35 h-35 rounded-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-center">
                {course.title}
              </h3>
              <p className="text-color mt-2 text-center">
                {course.description}
              </p>

              <p className="bg-gradient-to-b from-black to-red-500 text-transparent bg-clip-text text-2xl text-center mt-2">
                Click to learn more
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {isOpen && selectedFeature && (
          <Modal onClose={closeModal}>
            <h2 className="text-2xl font-bold text-white">
              {selectedFeature.title}
            </h2>
            <p className="mt-4 text-white">{selectedFeature.details}</p>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default CoursesPage;
