'use client';

import { FC } from 'react';

const NewsletterCTA: FC = () => {
 

  return (
    <section className="w-full bg-white py-12 px-4 flex justify-center">
      <div className="w-full max-w-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Stay updated with our latest news, resources, and insights.
        </p>

        <form
       
          className="flex items-stretch w-full max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Your email here"
           
            className="flex-1 px-4 py-3 rounded-l-md border border-[#0C1A2B] outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-r-md hover:bg-red-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;
