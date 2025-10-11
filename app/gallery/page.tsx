'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import PageBanner from '../components/pagebanner/PageBanner';

const galleryImages = [
  { id: 1, src: "/assets/backend.jpg", alt: "Hospital Project" , title: "Hospital Project", description: "A comprehensive healthcare management system."},
  { id: 2, src: "/assets/chinwenma.jpg", alt: "Online Bookstore", title: "Online Bookstore", description: "A platform to buy and sell books online." },
  { id: 3, src: "/assets/cyber.jpg", alt: "Travel and Tour App", title: "Travel and Tour App", description: "An app to explore and book travel experiences." },
  { id: 4, src: "/assets/dash.png", alt: "Holy Rosary Vocation" , title: "Holy Rosary Vocation", description: "A spiritual journey through prayer and devotion." },
  { id: 5, src: "/assets/hero-web.jpg", alt: "Sisters of Perpetual Adoration", title: "Sisters of Perpetual Adoration", description: "A community dedicated to continuous prayer and worship." },
  { id: 6, src: "/assets/download2.jpg", alt: "ICT Training Session" , title: "ICT Training Session", description: "Empowering individuals with essential ICT skills." },
  { id: 7, src: "/assets/download3.avif", alt: "Community Outreach Program", title: "Community Outreach Program", description: "Making a positive impact in local communities." },
  { id: 8, src: "/assets/download4.jpg", alt: "Youth Empowerment Workshop", title: "Youth Empowerment Workshop", description: "Inspiring and equipping the next generation." },
  { id: 9, src: "/assets/hero-graphic.jpg", alt: "Environmental Awareness Campaign", title: "Environmental Awareness Campaign", description: "Promoting sustainability and eco-friendly practices." },
  { id: 10, src: "/assets/download6.jpg", alt: "Cultural Festival", title: "Cultural Festival", description: "Celebrating diversity through music, dance, and art." },
  { id: 11, src: "/assets/download6.jpg", alt: "Educational Seminar", title: "Educational Seminar", description: "Sharing knowledge and insights on various topics." },
  { id: 12, src: "/assets/hero1-network.jpg", alt: "Health and Wellness Fair", title: "Health and Wellness Fair", description: "Promoting healthy living and well-being." },
];

const ITEMS_PER_PAGE = 7;

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentImages = galleryImages.slice(start, end);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <main >
        <PageBanner  title="Gallery" 
     subtitle='gajdhcj'
     backgroundImage='assets/hero26.jpg'/>
     <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
       
        {/* True Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-2 space-y-4 [column-fill:_balance]">
          {currentImages.map((img, i) => (
            <div
              key={img.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow cursor-pointer group relative transition-transform hover:scale-[1.02]"
              onClick={() => setIndex(start + i)} // keep global index for lightbox
            >
              <Image
                src={img.src}
                alt={img.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg transition duration-500 ease-in-out group-hover:blur-[1px]"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                <h3 className="text-lg font-semibold">{img.title}</h3>
                <p className="text-sm mt-1">{img.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
            >
              Prev
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
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
          on={{ view: ({ index }) => setIndex(index) }}
          plugins={[Zoom, Fullscreen, Thumbnails, Captions]}
          captions={{
            showToggle: true,
            descriptionTextAlign: 'center',
          }}
        />
        </div>
      </div>
    </main>
  );
}
