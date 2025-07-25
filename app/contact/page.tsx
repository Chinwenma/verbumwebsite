import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import PageBanner from "../components/pagebanner/PageBanner";

// import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="for inquiries and support"
        backgroundImage="/assets/hero-img.jpg"
      />

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6 bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-semibold text-[#0C1A2B]">
              Send Us a Message
            </h2>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring" />
            </div>
            <button
              type="submit"
              className="bg-[#d4190f] text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-[#1f425c] text-white p-6 rounded shadow space-y-6">
            <h2 className="text-2xl font-semibold text-[#e0eaf7] text-center">
              Get in Touch
            </h2>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#f90733] mt-1" />
              <p>1-3 Cidjap Street. Behind MRS Filling Station Uwani, Enugu, Nigeria</p>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-[#f90733] mt-1" />
              <p>+2347049154690</p>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#f90733] mt-1" />
              <p>info@verbumnetworksenugu.com</p>
            </div>
             <div className="flex items-center gap-3">
               <span className="text-red-500 text-xl">⏰</span>
              <p>Tuesday - Friday; 8:00 AM to 5:00 PM</p>
            </div>
            <div className="pt-4">
              <p className="mb-2">Follow us on social media</p>
              <div className="flex gap-4 text-2xl">
                <a
                  href="https://facebook.com/VerbumNetworksLTD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="hover:text-[#f90733] transition" />
                </a>
                <a
                  href="https://twitter.com/VerbumLimited"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="hover:text-[#f90733] transition" />
                </a>
                <a
                  href="https://www.linkedin.com/company/verbum-networks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="hover:text-[#f90733] transition" />
                </a>
                <a
                  href="https://instagram.com/verbumnetworksltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-[#f90733] transition" />
                </a>
                <a
                  href="https://www.tiktok.com/@verbumnetworksltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="hover:text-[#f90733] transition" />
                </a>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-96 mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7111972094744!2d7.490286973503567!3d6.4311339242329115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a164ddaabdd7%3A0x15205a092b91068c!2sCatholic%20Institute%20for%20Development%20Justice%20And%20Peace!5e0!3m2!1sen!2sng!4v1753444687209!5m2!1sen!2sng"
          width="600"
          height="450"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}

// 'use client';

// import { useState } from 'react';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData); // Replace with actual form handling logic
//   };

//   return (
//     <section className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
//       <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-6xl">
//         {/* Left: Contact Info */}
//         <div className="bg-[#1f425c] text-white p-8 md:w-1/2 space-y-6">
//           <h2 className="text-2xl font-bold">Contact Information</h2>
//           <p>Fill up the form and our team would get back to you within 24 hours.</p>

//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <span className="text-red-500 text-xl">📞</span>
//               <p>+2347049154690</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="text-red-500 text-xl">📧</span>
//               <p>info@verbumnetworksenugu.com</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="text-red-500 text-xl">📍</span>
//               <p>1 - 3 CIDJAP Street, Uwani, Enugu.</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="text-red-500 text-xl">⏰</span>
//               <p>Tuesday - Friday; 8:00 AM to 5:00 PM</p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Contact Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-[#d8e7f0] p-8 md:w-1/2 space-y-6"
//         >
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             className="w-full border-b border-gray-500 bg-transparent focus:outline-none py-2"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full border-b border-gray-500 bg-transparent focus:outline-none py-2"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             className="w-full border-b border-gray-500 bg-transparent focus:outline-none py-2"
//             value={formData.subject}
//             onChange={handleChange}
//           />

//           <textarea
//             name="message"
//             placeholder="Your message here"
//             className="w-full border-b border-gray-500 bg-transparent focus:outline-none py-2 min-h-[120px]"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />

//           <button
//             type="submit"
//             className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition duration-300"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
