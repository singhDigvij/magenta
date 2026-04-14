import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPolicies } from "../api/policyApi.js";

const Downloads = () => {
  const [policies, setPolicies] = useState([]);

  // 🔹 Fetch policies
  useEffect(() => {
    const loadPolicies = async () => {
      try {
        const res = await fetchPolicies();
        if (res.success) {
          setPolicies(res.policies);
        }
      } catch (error) {
        console.error("Error fetching policies:", error);
      }
    };

    loadPolicies();
  }, []);

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/downloads/downloads1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Downloads
          </h1>

          <p className="text-md md:text-base">
            <Link
              to="/"
              className="opacity-80 hover:text-pink-400 transition"
            >
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">Downloads</span>
          </p>
        </div>
      </section>

      {/* ================= POLICIES SECTION ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Download Policies
          </h2>

          {policies.length === 0 ? (
            <p className="text-center text-gray-500">
              No policies available
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {policies.map((p) => (
                <div
                  key={p._id}
                  className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
                >
                  <h3 className="font-semibold mb-4">{p.title}</h3>

                  <a
                    href={p.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export { Downloads };