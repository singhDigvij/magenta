import { useEffect, useState } from "react";
import {
  fetchPolicies,
  createPolicyApi,
  deletePolicyApi,
} from "../api/policyApi.js";

const AdminDashboard = () => {
  const [policies, setPolicies] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  // 🔹 Load policies
  const loadPolicies = async () => {
    const res = await fetchPolicies();
    if (res.success) {
      setPolicies(res.policies);
    }
  };

  useEffect(() => {
    loadPolicies();
  }, []);

  // 🔹 Add Policy
  const handleSubmit = async () => {
    if (!title || !file) {
      alert("Please enter title and select file");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    const res = await createPolicyApi(formData);

    if (res.success) {
      alert("✅ Policy added successfully");
      setTitle("");
      setFile(null);
      loadPolicies();
    }
  };

  // 🔹 Delete Policy
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this policy?")) return;

    await deletePolicyApi(id);
    loadPolicies();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* 🔷 TITLE */}
        <h1 className="text-3xl font-bold text-center mb-10">
          Admin Dashboard (Policies)
        </h1>

        {/* ➕ ADD POLICY */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4">Add New Policy</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Policy Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="border p-2 rounded w-full"
            />

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-green-700"
            >
              Add
            </button>
          </div>
        </div>

        {/* 📄 POLICY LIST */}
        <div>
          <h2 className="text-xl font-semibold mb-6">All Policies</h2>

          {policies.length === 0 ? (
            <p className="text-gray-500">No policies added yet</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {policies.map((p) => (
                <div
                  key={p._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  <h3 className="font-semibold">{p.title}</h3>

                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={p.fileUrl}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      View
                    </a>

                    <button
                      onClick={() => handleDelete(p._id)}
                      className="bg-red-600 cursor-pointer text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export { AdminDashboard };