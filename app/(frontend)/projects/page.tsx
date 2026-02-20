"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "../../components/pagebanner/PageBanner";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Catholic Diocese of Katsina",
    description:
      "A web app for the Catholic Diocese of Katsina, showcasing their mission, services, and community events.",
    image: "/assets/project1.png",
    url: "https://catholicdioceseofkatsina.org/",
  },
  {
    id: 2,
    title: "Immaculate heart of Mary specialist hospital, Nkpor",
    description:
      "The website was developed to enhance the hospital’s online presence and accessibility. It features a clean, user-friendly design that highlights the hospital’s services",
    image: "/assets/project2.png",
    url: "https://www.ihmcare.net/",
  },
  {
    id: 3,
    title: "Art Fare Ex Nihilo",
    description:
      "Showing how art responds to faith and reason. Creating immersive experience for audience participation",
    image: "/assets/project5.png",
    url: "https://artfarexnihilo.com/",
  },

  {
    id: 4,
    title: "Holy Rosary Vocation",
    description:
      "A responsive and visually appealing website, designed to highlight their mission, spiritual programs, and vocational activities while promoting engagement and awareness online.",
    image: "/assets/project4.png",
    url: "https://mshrvocations.org/",
  },
  {
    id: 5,
    title: "Sisters of Perpetual Eucharist Adoration",
    description:
      "A beautifully crafted website,designed to communicate their mission, spirituality, and way of life.",
    image: "/assets/project3.png",
    url: "https://speaclient.verbumhealth.com/",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="Projects"
        subtitle="Empowering institutions, businesses, and communities through technology and innovation."
        backgroundImage="/assets/a1fiy-v6plo.avif"
      />
      <section className="min-h-screen  py-16 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-sm overflow-hidden text-center hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-2">
                <h2 className="text-xl font-medium text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm leading-normal tracking-wide text-justify p-4">
                  {project.description}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
