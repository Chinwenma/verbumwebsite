"use client";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Link from "next/link";

const Contact: FC = () => {
  // const [loading, setLoading] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   console.log(formData);

  //   try {
  //     await fetch(process.env.NEXT_PUBLIC_FormLink as string, {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setFormData({
  //     message: "",
  //     name: "",
  //     email: "",
  //   });
  //   // e.currentTarget.submit(); // Actually submit the form
  //   setLoading(false);
  // };

  return (
    <section id="contact" className="px-8 bg-[#8f0000] text-white">
      <form className="max-w-xl mx-auto  space-y-4 ">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center  tracking-wide mb-4 font-bold pt-8">
          Contact Us
        </h2>
        <p className="text-center text-color">
          Simply request a demo today, and within 24 hours, {"you'll"} receive
          full access to explore all the features and benefits we offer.
          Experience it firsthand!
        </p>

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 border rounded"
         
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          
        />
        <textarea
          name="message"
         
          required
          rows={5}
          placeholder="Your Message"
          className="w-full p-3 border rounded"
        ></textarea>
         <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center gap-4 mt-4">
        <Link href="/about" >
          <button   className="bg-[#ff0000] text-white hover:bg-yellow-400 transition-all 200 mb-8 px-5 py-2 rounded-md">
            All Services
          </button>
        </Link>
      </div>
      </form>
    </section>
  );
};

export default Contact;
