"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Button from "@/app/components/dashboard/btn/AddNewButton";

export default function AddNetworkingClientPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    expiry: "",
    address: "",
    domain: "",
    projectDescription: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
const isFormValid = useMemo(() => {
  return (
    formData.name &&
    formData.contact &&
    formData.expiry &&
    formData.address &&
    formData.domain &&
    formData.projectDescription
  );
}, [formData]);
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!isFormValid) return;

  setLoading(true);

  try {
    console.log("New client data:", formData);

    toast.success("Networking client added successfully 🎉", {
      position: "top-right",
      autoClose: 2000,
    });

    // Reset form but stay on page
    setFormData({
      name: "",
      contact: "",
      expiry: "",
      address: "",
      domain: "",
      projectDescription: "",
    });

  } catch (error) {
    toast.error("Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-6"
      >
        <h1 className="text-2xl font-semibold mb-6">Add New Networking Client</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Client Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Contact</label>
            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Expiry Date</label>
            <input
              type="date"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Domain</label>
            <input
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Project Description</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>
<Button
  type="submit"
  label="Add client"
  loading={loading}
  disabled={!isFormValid}
/>
          </div>
        </form>
      </motion.div>
    </div>
  );
}