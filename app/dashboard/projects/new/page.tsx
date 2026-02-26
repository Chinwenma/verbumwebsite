"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { toast } from "react-toastify";
import { ProjectStatus } from "@/lib/projects/projects";
import Button from "@/app/components/dashboard/btn/AddNewButton";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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


    console.log("Submitting:", payload);

toast.success("Project created successfully!");

setFormData({
  title: "",
  client: "",
  status: "" as ProjectStatus | "",
  projectDescription: "",
  startDate: "",
  deadline: "",
  budget: "",
  amountPaid: "",
});
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
          {/* Project Title */}
          <div>
            <label className="block text-sm mb-1 font-medium">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-sm mb-1 font-medium">
              Client Name
            </label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm mb-1 font-medium">
              Project Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            >
              <option value="">Select Status</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {formatStatus(status)}
                </option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 font-medium">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">Deadline</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Budget */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 font-medium">Budget</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                Amount Paid
              </label>
              <input
                type="number"
                name="amountPaid"
                value={formData.amountPaid}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-1 font-medium">
              Project Description
            </label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows={4}
              className="w-full border px-3 py-2 rounded-lg"
              required
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
  label="Create Project"
  loading={loading}
  disabled={!isFormValid}
/>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
