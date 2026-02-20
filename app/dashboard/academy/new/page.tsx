"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddNetworkingClientPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phone: "",
    Guadian: "",
    numberOfGuardian: "",
    address: "",
    Duration: "",
    enrollmentDay: "",
    courseEnrolled: "",
    amountPaid: "",
    balance: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("New client data:", formData);

      // TODO: connect to backend POST
      // await fetch('/api/Networking-clients', { method: 'POST', body: JSON.stringify(formData) })

      toast.success("Networking client added successfully 🎉", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        router.push("/dashboard/Networking-clients");
      }, 2200);
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-6"
      >
        <h1 className="text-2xl font-semibold mb-6">Add New Networking Client</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Guardian */}
          <div>
            <label className="block text-sm mb-1">Guardian Name</label>
            <input
              name="Guadian"
              value={formData.Guadian}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Number of Guardians */}
          <div>
            <label className="block text-sm mb-1">Number of Guardians</label>
            <input
              type="number"
              name="numberOfGuardian"
              value={formData.numberOfGuardian}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm mb-1">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm mb-1">Course Duration</label>
            <input
              name="Duration"
              value={formData.Duration}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="e.g., 3 months"
            />
          </div>

          {/* Enrollment Day */}
          <div>
            <label className="block text-sm mb-1">Enrollment Date</label>
            <input
              type="date"
              name="enrollmentDay"
              value={formData.enrollmentDay}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Course Enrolled */}
          <div>
            <label className="block text-sm mb-1">Course Enrolled</label>
            <input
              name="courseEnrolled"
              value={formData.courseEnrolled}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Amount Paid */}
          <div>
            <label className="block text-sm mb-1">Amount Paid</label>
            <input
              type="number"
              name="amountPaid"
              value={formData.amountPaid}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Balance */}
          <div>
            <label className="block text-sm mb-1">Balance (if any)</label>
            <input
              type="number"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Saving..." : "Create Student"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}