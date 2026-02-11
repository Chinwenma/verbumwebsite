"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import PageBanner from "../../components/pagebanner/PageBanner";

const galleryImages = [
  {
    id: 1,
    src: "/assets/backend.jpg",
    alt: "Backend Development",
    title: "Backend Development",
    description: "Building robust server-side logic and database management.",
  },
  {
    id: 2,
    src: "/assets/data.jpg",
    alt: "Data Analytics Dashboard",
    title: "Data Analytics Dashboard",
    description: "Transforming raw data into meaningful business insights.",
  },
  {
    id: 3,
    src: "/assets/cyber.jpg",
    alt: "Cybersecurity Project",
    title: "Cybersecurity Project",
    description: "Implementing security measures to protect digital systems.",
  },
  {
    id: 4,
    src: "/assets/dash.png",
    alt: "Admin Dashboard",
    title: "Admin Dashboard",
    description: "An intuitive dashboard for efficient system management.",
  },
  {
    id: 5,
    src: "/assets/hero-web.jpg",
    alt: "Web Application Development",
    title: "Web Application Development",
    description: "Modern web apps built with React and Next.js frameworks.",
  },
  {
    id: 6,
    src: "/assets/download2.jpg",
    alt: "ICT Training Session",
    title: "ICT Training Session",
    description: "Hands-on learning in coding, networking, and design.",
  },
  {
    id: 7,
    src: "/assets/download3.avif",
    alt: "Cloud Computing",
    title: "Cloud Computing",
    description: "Exploring scalable and secure cloud infrastructures.",
  },
  {
    id: 8,
    src: "/assets/download4.jpg",
    alt: "AI and Machine Learning",
    title: "AI and Machine Learning",
    description: "Developing intelligent systems using data-driven models.",
  },
  {
    id: 9,
    src: "/assets/hero-graphic.jpg",
    alt: "UI/UX Design Concepts",
    title: "UI/UX Design Concepts",
    description: "Designing user-centered interfaces and smooth experiences.",
  },
  {
    id: 10,
    src: "/assets/download6.jpg",
    alt: "Mobile App Development",
    title: "Mobile App Development",
    description: "Creating responsive and user-friendly mobile applications.",
  },
  {
    id: 11,
    src: "/assets/download6.jpg",
    alt: "Tech Conference",
    title: "Tech Conference",
    description: "Showcasing innovative solutions and emerging technologies.",
  },
  {
    id: 12,
    src: "/assets/hero1-network.jpg",
    alt: "Networking Solutions",
    title: "Networking Solutions",
    description: "Building fast and secure network infrastructures.",
  },
  {
    id: 13,
    src: "/assets/IMG-20251017-WA0009.jpg",
    alt: "Project Presentation",
    title: "Project Presentation",
    description: "Presenting our latest full-stack project to clients.",
  },
  {
    id: 14,
    src: "/assets/IMG-20251017-WA0010.jpg",
    alt: "Team Collaboration",
    title: "Team Collaboration",
    description: "Developers brainstorming and working on live projects.",
  },
  {
    id: 15,
    src: "/assets/IMG-20251017-WA0011.jpg",
    alt: "Software Deployment",
    title: "Software Deployment",
    description: "Deploying scalable software solutions to production.",
  },
  {
    id: 16,
    src: "/assets/IMG-20251017-WA0012.jpg",
    alt: "Frontend Training",
    title: "Frontend Training",
    description: "Teaching HTML, CSS, and JavaScript for modern web design.",
  },
  {
    id: 17,
    src: "/assets/IMG-20251017-WA0013.jpg",
    alt: "Coding Workshop",
    title: "Coding Workshop",
    description: "Interactive coding session with students and interns.",
  },
  {
    id: 18,
    src: "/assets/IMG-20251017-WA0014.jpg",
    alt: "Tech Networking Event",
    title: "Tech Networking Event",
    description: "Connecting tech enthusiasts and professionals.",
  },
  {
    id: 19,
    src: "/assets/IMG-20251017-WA0015.jpg",
    alt: "Closing Demo Day",
    title: "Closing Demo Day",
    description: "Showcasing final tech projects and solutions.",
  },
  {
    id: 20,
    src: "/assets/IMG-20251017-WA0016.jpg",
    alt: "Tech Discussion",
    title: "Tech Discussion",
    description: "Sharing ideas on software development and innovation.",
  },
  {
    id: 21,
    src: "/assets/IMG-20251017-WA0017.jpg",
    alt: "Keynote Session",
    title: "Keynote Session",
    description: "Inspiring talks on the future of technology and AI.",
  },
  {
    id: 22,
    src: "/assets/IMG-20251017-WA0018.jpg",
    alt: "Panel Discussion",
    title: "Panel Discussion",
    description: "Experts discussing trends in software and data science.",
  },
  {
    id: 23,
    src: "/assets/IMG-20251017-WA0019.jpg",
    alt: "Tech Exhibition",
    title: "Tech Exhibition",
    description: "Displaying innovative tools and digital products.",
  },
  {
    id: 24,
    src: "/assets/IMG-20251017-WA0020.jpg",
    alt: "Volunteer Mentorship",
    title: "Volunteer Mentorship",
    description: "Guiding young developers through practical learning.",
  },
  {
    id: 25,
    src: "/assets/IMG-20251017-WA0021.jpg",
    alt: "Tech Presentation",
    title: "Tech Presentation",
    description: "Presenting a prototype built during the hackathon.",
  },
  {
    id: 26,
    src: "/assets/IMG-20251017-WA0022.jpg",
    alt: "Students at Work",
    title: "Students at Work",
    description: "Learners coding and testing real-world applications.",
  },
  {
    id: 27,
    src: "/assets/IMG-20251017-WA0023.jpg",
    alt: "Innovation Showcase",
    title: "Innovation Showcase",
    description: "Highlighting innovative ICT projects and achievements.",
  },
  {
    id: 28,
    src: "/assets/hero26.jpg",
    alt: "Gallery Overview",
    title: "Tech Gallery Overview",
    description: "A look at our latest ICT and software projects.",
  },
  {
    id: 29,
    src: "/assets/ay27i-1luvt.webp",
    alt: "Design Background",
    title: "Design Background",
    description: "Creative visuals and clean UI layouts.",
  },
  {
    id: 30,
    src: "/assets/students.png",
    alt: "Tech Students",
    title: "Tech Students",
    description: "Focused learners developing modern digital skills.",
  },
  {
    id: 31,
    src: "/assets/ay27i-1luvt.webp",
    alt: "Service Background",
    title: "Service Background",
    description: "Visual design for tech service landing pages.",
  },
  {
    id: 32,
    src: "/assets/hero-web.jpg",
    alt: "Service Image",
    title: "Service Image",
    description: "Highlighting our range of ICT solutions and services.",
  },
];


const ITEMS_PER_PAGE = 6;

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentImages = galleryImages.slice(start, end);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <main>
      <PageBanner
        title="Gallery"
        subtitle="Explore our inspiring moments"
        backgroundImage="assets/hero26.jpg"
      />

      <div className="bg-gray-100 min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Even Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentImages.map((img, i) => (
              <div
                key={img.id}
                className="relative group overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => setIndex(start + i)}
              >
                <div className="w-full h-96 relative">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-75"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-center">
                  <h3 className="text-lg font-semibold">{img.title}</h3>
                  <p className="text-sm mt-1">{img.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 space-x-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-red-700 text-white rounded disabled:bg-gray-400"
              >
                Prev
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-red-700 text-white rounded disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          )}

          {/* Lightbox */}
          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            index={index}
            slides={galleryImages}
            plugins={[Zoom, Fullscreen, Thumbnails, Captions]}
            captions={{ showToggle: true, descriptionTextAlign: "center" }}
          />
        </div>
      </div>
    </main>
  );
}
