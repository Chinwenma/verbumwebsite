
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with actual form handling logic
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-6xl">
        {/* Left: Contact Info */}
        <div className="bg-[#1f425c] text-white p-8 md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p>Fill up the form and our team would get back to you within 24 hours.</p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-red-500 text-xl">📞</span>
              <p>+2347049154690</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500 text-xl">📧</span>
              <p>info@verbumnetworksenugu.com</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500 text-xl">📍</span>
              <p>1 - 3 CIDJAP Street, Uwani, Enugu.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500 text-xl">⏰</span>
              <p>Tuesday - Friday; 8:00 AM to 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#d8e7f0] p-8 md:w-1/2 space-y-6"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border-b border-gray-500 bg-transparent focus:outline-none py-2"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border-b border-gray-500 bg-transparent focus:outline-none py-2"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border-b border-gray-500 bg-transparent focus:outline-none py-2"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your message here"
            className="w-full border-b border-gray-500 bg-transparent focus:outline-none py-2 min-h-[120px]"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
