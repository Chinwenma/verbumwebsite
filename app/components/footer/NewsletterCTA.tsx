'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Handle email submission logic
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <section className="w-full bg-white text-center py-12 border-t-4 border-red-800">
      <p className="text-red-800 text-sm sm:text-base mb-2">
        Subscribe to get <strong>FREE</strong> notifications on every update from us!
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-red-800 mb-6">Email Newsletter</h2>
      
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4"
      >
        <input
          type="email"
          required
          placeholder="Your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-[300px] md:w-[400px] px-4 py-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded sm:w-auto transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
