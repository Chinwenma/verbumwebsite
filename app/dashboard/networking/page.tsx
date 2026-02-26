"use client";
import { useRouter } from "next/navigation";

import { useState, useMemo } from "react";
import { Eye, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NetworkingClient, NetworkingClients } from "@/lib/net/clients";
import AddNewButton from "@/app/components/dashboard/btn/AddNewButton";
import Button from "@/app/components/dashboard/btn/AddNewButton";

export default function NetworkingClientsPage() {
  const router = useRouter();
const [deleteClient, setDeleteClient] = useState<any | null>(null);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState<NetworkingClient | null>(null);

  const itemsPerPage = 5;
const handleDeleteClient = () => {
  if (!deleteClient) return;

  console.log("Deleting client:", deleteClient.id);

  // later → call API
  // await fetch(`/api/Networking-clients/${deleteClient.id}`, { method: "DELETE" })

  setDeleteClient(null);
  setSelectedClient(null);
};

  // Search
  const filteredClients = useMemo(() => {
    return NetworkingClients.filter((client) =>
      client.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Pagination
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="p-6">


     <h2 className="text-2xl font-semibold mb-4">Networking Clients</h2>
            <div className="flex justify-between items-center mb-4">
             <input
        type="text"
        placeholder="Search Networking clients..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="mb-4 w-full md:w-1/3 px-3 py-2 border rounded-lg"
      />
             <Button
       href="/dashboard/networking/new"
       label="New client"
       icon={<Plus size={18} />}
     />
            </div>

   
 

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Expiry</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedClients.map((client) => (
              <tr key={client.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{client.name}</td>
                <td className="p-3">{client.contact}</td>
                <td className="p-3">{client.expiry}</td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedClient(client)}
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
        {selectedClient && (
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
                onClick={() => setSelectedClient(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <h3 className="text-xl font-semibold mb-4">
                {selectedClient.name}
              </h3>

              <div className="space-y-2 text-sm mb-6">
                <p><strong>Contact:</strong> {selectedClient.contact}</p>
                <p><strong>Expiry:</strong> {selectedClient.expiry}</p>
                <p><strong>Address:</strong> {selectedClient.address}</p>
                <p><strong>Domain:</strong> {selectedClient.domain}</p>
                <p>
                  <strong>Project Description:</strong>
                  <br />
                  {selectedClient.projectDescription}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => router.push(`/dashboard/networking/${selectedClient.id}/edit`)}
                  className="px-4 py-2 rounded-lg cursor-pointer bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Edit Client
                </button>

                <button
                  onClick={() => setDeleteClient(selectedClient)}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Delete confirmation popup */}
        {deleteClient && (
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
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">Delete Client</h3>
              <p className="text-sm mb-6">
                Are you sure you want to delete <strong>{deleteClient.name}</strong>? This action cannot be undone.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteClient(null)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>

                <button
                  onClick={handleDeleteClient}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Confirm Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
