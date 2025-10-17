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
import PageBanner from "../components/pagebanner/PageBanner";

const galleryImages = [
  {
    id: 1,
    src: "/assets/backend.jpg",
    alt: "Hospital Project",
    title: "Hospital Project",
    description: "A comprehensive healthcare management system.",
  },
  {
    id: 2,
    src: "/assets/data.jpg",
    alt: "Online Bookstore",
    title: "Online Bookstore",
    description: "A platform to buy and sell books online.",
  },
  {
    id: 3,
    src: "/assets/cyber.jpg",
    alt: "Travel and Tour App",
    title: "Travel and Tour App",
    description: "An app to explore and book travel experiences.",
  },
  {
    id: 4,
    src: "/assets/dash.png",
    alt: "Holy Rosary Vocation",
    title: "Holy Rosary Vocation",
    description: "A spiritual journey through prayer and devotion.",
  },
  {
    id: 5,
    src: "/assets/hero-web.jpg",
    alt: "Sisters of Perpetual Adoration",
    title: "Sisters of Perpetual Adoration",
    description: "A community dedicated to continuous prayer and worship.",
  },
  {
    id: 6,
    src: "/assets/download2.jpg",
    alt: "ICT Training Session",
    title: "ICT Training Session",
    description: "Empowering individuals with essential ICT skills.",
  },
  {
    id: 7,
    src: "/assets/download3.avif",
    alt: "Community Outreach Program",
    title: "Community Outreach Program",
    description: "Making a positive impact in local communities.",
  },
  {
    id: 8,
    src: "/assets/download4.jpg",
    alt: "Youth Empowerment Workshop",
    title: "Youth Empowerment Workshop",
    description: "Inspiring and equipping the next generation.",
  },
  {
    id: 9,
    src: "/assets/hero-graphic.jpg",
    alt: "Environmental Awareness Campaign",
    title: "Environmental Awareness Campaign",
    description: "Promoting sustainability and eco-friendly practices.",
  },
  {
    id: 10,
    src: "/assets/download6.jpg",
    alt: "Cultural Festival",
    title: "Cultural Festival",
    description: "Celebrating diversity through music, dance, and art.",
  },
  {
    id: 11,
    src: "/assets/download6.jpg",
    alt: "Educational Seminar",
    title: "Educational Seminar",
    description: "Sharing knowledge and insights on various topics.",
  },
  {
    id: 12,
    src: "/assets/hero1-network.jpg",
    alt: "Health and Wellness Fair",
    title: "Health and Wellness Fair",
    description: "Promoting healthy living and well-being.",
  },
  {
    id: 13,
    src: "/assets/IMG-20251017-WA0009.jpg",
    alt: "Award Presentation",
    title: "Award Presentation",
    description: "Moments from the Holy Rosary event.",
  },
  {
    id: 14,
    src: "/assets/IMG-20251017-WA0010.jpg",
    alt: "Group Photo",
    title: "Group Photo",
    description: "Group photograph with participants.",
  },
  {
    id: 15,
    src: "/assets/IMG-20251017-WA0011.jpg",
    alt: "Certificate Presentation",
    title: "Certificate Presentation",
    description: "Recognizing outstanding contributions.",
  },
  {
    id: 16,
    src: "/assets/IMG-20251017-WA0012.jpg",
    alt: "Training Session",
    title: "Training Session",
    description: "Empowering learners with ICT knowledge.",
  },
  {
    id: 17,
    src: "/assets/IMG-20251017-WA0013.jpg",
    alt: "Interactive Workshop",
    title: "Interactive Workshop",
    description: "Engaging activities during the workshop.",
  },
  {
    id: 18,
    src: "/assets/IMG-20251017-WA0014.jpg",
    alt: "Networking Event",
    title: "Networking Event",
    description: "Connecting professionals and enthusiasts.",
  },
  {
    id: 19,
    src: "/assets/IMG-20251017-WA0015.jpg",
    alt: "Closing Ceremony",
    title: "Closing Ceremony",
    description: "Concluding the event with memorable moments.",
  },
  {
    id: 20,
    src: "/assets/IMG-20251017-WA0016.jpg",
    alt: "Group Discussion",
    title: "Group Discussion",
    description: "Collaborative discussions among participants.",
  },
  {
    id: 21,
    src: "/assets/IMG-20251017-WA0017.jpg",
    alt: "Keynote Speech",
    title: "Keynote Speech",
    description: "Inspiring words from the keynote speaker.",
  },
  {
    id: 22,
    src: "/assets/IMG-20251017-WA0018.jpg",
    alt: "Panel Discussion",
    title: "Panel Discussion",
    description: "Experts sharing insights on various topics.",
  },
  {
    id: 23,
    src: "/assets/IMG-20251017-WA0019.jpg",
    alt: "Exhibition Booths",
    title: "Exhibition Booths",
    description: "Showcasing innovative projects and ideas.",
  },
  {
    id: 24,
    src: "/assets/IMG-20251017-WA0020.jpg",
    alt: "Volunteer Activities",
    title: "Volunteer Activities",
    description: "Making a difference through community service.",
  },
  {
    id: 25,
    src: "/assets/IMG-20251017-WA0021.jpg",
    alt: "Cultural Performance",
    title: "Cultural Performance",
    description: "Showcasing traditional music and dance.",
  },
  {
    id: 26,
    src: "/assets/IMG-20251017-WA0022.jpg",
    alt: "Workshop Participants",
    title: "Workshop Participants",
    description: "Engaged learners during the ICT workshop.",
  },
  {
    id: 27,
    src: "/assets/IMG-20251017-WA0023.jpg",
    alt: "Event Highlights",
    title: "Event Highlights",
    description: "Capturing memorable moments from the event.",
  },
  {
    id: 28,
    src: "/assets/hero26.jpg",
    alt: "Gallery Hero Image",
    title: "Gallery Hero Image",
    description: "Explore our inspiring moments.",
  },
  {
    id: 29,
    src: "/assets/ay27i-1luvt.webp",
    alt: "Background Image",
    title: "Background Image",
    description: "Aesthetic background for gallery section.",
  },

  {id: 30,
    src: "/assets/students.png",
    alt: "Students Image",
    title: "Students Image",
    description: "Engaged students in a learning environment.",
  },
  {    id: 31,
    src: "/assets/a1fiy-v6plo.avif",
    alt: "Banner Image",
    title: "Banner Image",
    description: "Banner for services page.",
    },
    {    id: 32,
      src: "/assets/ay27i-1luvt.webp",
      alt: "Services Background",
      title: "Services Background",
      description: "Background image for services section.",
      },
      {    id: 33,
        src: "/assets/hero-web.jpg",
        alt: "Service Card Image",
        title: "Service Card Image",
        description: "Image representing a service offering.",
        },
];

const ITEMS_PER_PAGE = 9;

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
                <div className="w-full h-64 relative">
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
