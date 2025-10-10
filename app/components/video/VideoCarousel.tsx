"use client";

import { useState } from "react";
import Image from "next/image";

const videos = [
  { title: "Admin Tour", youtubeId: "OfvivMb0QBk" },
  { title: "Getting Started", youtubeId: "RWi9Ny8VZfc" },
  { title: "you", youtubeId: "OR7tHi5CGGo" },
  { title: "youT", youtubeId: "8FTZmYMjCXM" },
  { title: "youTu", youtubeId: "GlRjNLpj-K4" },
  { title: "youTub", youtubeId: "zBx1CoX0gww" },
];
const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-white py-20" id="videos">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide bg mb-8 font-bold">Verbum Health HMS in Motion</h2> */}

        {/* Video grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {videos.map((video) => (
            <button
              key={video.youtubeId}
              onClick={() => setSelectedVideo(video.youtubeId)}
              className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow group"
            >
              <Image
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-5xl group-hover:scale-110 transition-transform">
                  ▶
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video mx-4 bg-black rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="HMS Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              style={{ border: "none" }}
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
