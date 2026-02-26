"use client";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { Eye, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ClientProject, clientProjects, ProjectStatus } from "@/lib/projects/projects";
import Button from "@/app/components/dashboard/btn/AddNewButton";
import { toast } from "react-toastify";

export default function ProjectPage() {
  const router = useRouter();

  const [deleteProject, setDeleteProject] = useState<ClientProject | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "">("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);

  const itemsPerPage = 5;

  const uniqueStatuses: ProjectStatus[] = [
    ...new Set(clientProjects.map((project) => project.status)),
  ];

  // Format status text
  const formatStatus = (status: ProjectStatus) =>
    status.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());

  // ✅ Status Color Styles
  const getStatusStyles = (status: ProjectStatus) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "in_progress":
        return "bg-yellow-100 text-yellow-700";
      case "on_hold":
        return "bg-blue-100 text-blue-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Filtering
  const filteredProjects = useMemo(() => {
    return clientProjects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        selectedStatus === "" || project.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [search, selectedStatus]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

const handleDeleteProject = () => {
  if (!deleteProject) return;

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this project?"
  );

  if (!confirmDelete) return;

  console.log("Deleting project:", deleteProject.id);

  toast.success("Project deleted (frontend only)", {
    position: "top-right",
    autoClose: 1500,
  });

  setDeleteProject(null);
  setSelectedProject(null);
};

  return (
    <main className="p-6">
<div className="flex justify-between items-center mb-6">
  <h2 className="text-2xl font-semibold mb-4">Clients Projects</h2>

 
</div>
      {/* Search + Status Filter */}
      <div className="flex flex-col items-center justify-center md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/3 px-3 py-2 border rounded-lg"
        />

        <select
          value={selectedStatus}
          onChange={(e) => {
            setSelectedStatus(e.target.value as ProjectStatus | "");
            setCurrentPage(1);
          }}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="">All Status</option>

          {uniqueStatuses.map((status) => (
            <option key={status} value={status}>
              {formatStatus(status)}
            </option>
          ))}
        </select>
         <Button
    href="/dashboard/projects/new"
    label="New Project"
    icon={<Plus size={18} />}
  />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Project Name</th>
              <th className="p-3">Client</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedProjects.map((project) => (
              <tr key={project.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{project.title}</td>
                <td className="p-3">{project.client}</td>

                {/* ✅ Colored Status Badge */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyles(
                      project.status
                    )}`}
                  >
                    {formatStatus(project.status)}
                  </span>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700"
                  >
                    <Eye size={18} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-lg relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <h3 className="text-xl font-semibold mb-4">
                {selectedProject.title}
              </h3>

              <div className="space-y-2 text-sm mb-6">
                <p><strong>Client:</strong> {selectedProject.client}</p>
                <p><strong>Budget:</strong> ${selectedProject.budget.toLocaleString()}</p>
                <p><strong>Amount Paid:</strong> ${selectedProject.amountPaid.toLocaleString()}</p>
                <p><strong>Start Date:</strong> {selectedProject.startDate.toLocaleDateString()}</p>
                <p><strong>Deadline:</strong> {selectedProject.deadline.toLocaleDateString()}</p>

                {/* ✅ Colored Status in Modal */}
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyles(
                      selectedProject.status
                    )}`}
                  >
                    {formatStatus(selectedProject.status)}
                  </span>
                </p>

                <p>
                  <strong>Project Description:</strong>
                  <br />
                  {selectedProject.projectDescription}
                </p>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() =>
                    router.push(`/dashboard/projects/${selectedProject.id}/edit`)
                  }
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Edit Project
                </button>

               <button
  onClick={handleDeleteProject}
  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
>
  Delete
</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}