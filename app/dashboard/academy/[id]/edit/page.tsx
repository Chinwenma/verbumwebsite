"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { AcademyClients, AcademyClient } from "@/lib/academy/students";

export default function EditAcademyClientPage() {
  const router = useRouter();
  const params = useParams();
  const clientId = Number(params.id); // convert from string to number

  // Initialize form state with all required fields
  const [formData, setFormData] = useState<AcademyClient>({
    id: 0,
    name: "",
    gender: "",
    phone: 0,
    Guadian: "",
    address: "",
    Duration: "",
    amountPaid: 0,
    balance: 0,
    enrollmentDay: "",
    numberOfGuardian: 1,
    courseEnrolled: "",
  });

  // Load existing client data (mock)
  useEffect(() => {
    const existingClient = AcademyClients.find((c) => c.id === clientId);
    if (existingClient) setFormData(existingClient);
  }, [clientId]);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "amountPaid" ||
        name === "balance" ||
        name === "phone" ||
        name === "numberOfGuardian"
          ? Number(value)
          : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Updated student client:", clientId, formData);
    // TODO: Connect to API (PUT/PATCH)
    router.push("/dashboard/academy");
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-6"
      >
        <h1 className="text-2xl font-semibold mb-6">Edit Academy Student</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
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
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Guardian */}
          <div>
            <label className="block text-sm mb-1">Guardian</label>
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
              name="numberOfGuardian"
              type="number"
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
            <label className="block text-sm mb-1">Duration</label>
            <input
              name="Duration"
              value={formData.Duration}
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
            <label className="block text-sm mb-1">Amount Paid (₦)</label>
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
            <label className="block text-sm mb-1">Balance (₦)</label>
            <input
              type="number"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Enrollment Day */}
          <div>
            <label className="block text-sm mb-1">Date of Enrollment</label>
            <input
              type="date"
              name="enrollmentDay"
              value={formData.enrollmentDay}
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
              className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}