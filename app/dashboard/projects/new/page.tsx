"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { toast } from "react-toastify";
import { ProjectStatus } from "@/lib/projects/projects";

export default function AddProjectPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    client: "",
    status: "" as ProjectStatus | "",
    projectDescription: "",
    startDate: "",
    deadline: "",
    budget: "",
    amountPaid: "",
  });

  const statuses: ProjectStatus[] = [
    "in_progress",
    "completed",
    "on_hold",
    "cancelled",
  ];

  const formatStatus = (status: ProjectStatus) =>
    status.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ Check if form is valid
  const isFormValid = useMemo(() => {
    return (
      formData.title &&
      formData.client &&
      formData.status &&
      formData.projectDescription &&
      formData.startDate &&
      formData.deadline &&
      formData.budget &&
      formData.amountPaid
    );
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    try {
      setLoading(true);

      const payload = {
        ...formData,
        budget: Number(formData.budget),
        amountPaid: Number(formData.amountPaid),
        startDate: new Date(formData.startDate),
        deadline: new Date(formData.deadline),
      };

      // 👉 Replace with your API call
      // await fetch("/api/projects", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });

      console.log("Submitting:", payload);

      toast.success("Project created successfully!");

      setTimeout(() => {
        router.push("/dashboard/projects");
      }, 1500);

    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 md:p-10 max-w-3xl mx-auto">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-6"
      >
      <h2 className="text-2xl font-semibold mb-6">Add New Project</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
 <div>
            <label className="block text-sm mb-1">Project Title</label>
             <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
          required
        />
           
          </div>
       
<div>
            <label className="block text-sm mb-1">Client Name</label>
        <input
          type="text"
          name="client"
          placeholder="Client Name"
          value={formData.client}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
        />
        </div>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
        >
          <option value="">Select Status</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {formatStatus(status)}
            </option>
          ))}
        </select>

        <textarea
          name="projectDescription"
          placeholder="Project Description"
          value={formData.projectDescription}
          onChange={handleChange}
          rows={4}
          className="w-full border px-3 py-2 rounded-lg"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
          />

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            value={formData.budget}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
          />

          <input
            type="number"
            name="amountPaid"
            placeholder="Amount Paid"
            value={formData.amountPaid}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`w-full py-3 rounded-lg text-white transition ${
            !isFormValid || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Creating Project..." : "Create Project"}
        </button>
      </form>
      </motion.div>
    </main>
  );
}