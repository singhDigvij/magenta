import { useEffect, useState } from "react";
import {
  fetchPolicies,
  createPolicyApi,
  deletePolicyApi,
} from "../api/policyApi.js";
import {
  fetchImages,
  createImageApi,
  deleteImageApi,
} from "../api/galleryApi.js";
import {
  fetchNewsletters,
  createNewsletterApi,
  deleteNewsletterApi,
} from "../api/newsletterApi.js";

const AdminDashboard = () => {
  const [policies, setPolicies] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const [images, setImages] = useState([]);
  const [imgTitle, setImgTitle] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const [newsletters, setNewsletters] = useState([]);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [newsAuthor, setNewsAuthor] = useState("");

  // 🔹 Load policies
  const loadPolicies = async () => {
    const res = await fetchPolicies();
    if (res.success) {
      setPolicies(res.policies);
    }
  };

  // 🔹 Load images
  const loadImages = async () => {
    const res = await fetchImages();
    if (res.success) {
      setImages(res.images);
    }
  };

  // 🔹 Load newsletter
  const loadNewsletters = async () => {
    const res = await fetchNewsletters();
    if (res.success) setNewsletters(res.newsletters);
  };

  useEffect(() => {
    loadPolicies();
    loadImages();
    loadNewsletters();
  }, []);

  // 🔹 Add Policy
  const handleSubmit = async () => {
    if (!title || !file) {
      alert("Enter all fields");
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

    const res = await deletePolicyApi(id);

    if (res.success) {
      alert("🗑️ Policy deleted successfully");
      loadPolicies();
    }
  };

  // 🔹 Add Image
  const handleImageSubmit = async () => {
    if (!imgTitle || !imgFile) {
      alert("Enter all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", imgTitle);
    formData.append("file", imgFile);

    const res = await createImageApi(formData);

    if (res.success) {
      alert("✅ Image added successfully");
      setImgTitle("");
      setImgFile(null);
      loadImages();
    }
  };

  // 🔹 Delete Image
  const handleImageDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;

    const res = await deleteImageApi(id);

    if (res.success) {
      alert("🗑️ Image deleted successfully");
      loadImages();
    }
  };

  // 🔹 Add Newsletter
  const handleNewsSubmit = async () => {
    if (!newsTitle || !newsContent || !newsDate || !newsAuthor) {
      alert("Enter all fields");
      return;
    }

    const res = await createNewsletterApi({
      title: newsTitle,
      content: newsContent,
      date: newsDate,
      author: newsAuthor,
    });

    if (res.success) {
      alert("✅ Newsletter added successfully");
      setNewsTitle("");
      setNewsContent("");
      setNewsDate("");
      setNewsAuthor("");
      loadNewsletters();
    }
  };

  // 🔹 Delete Newsletter
  const handleNewsDelete = async (id) => {
    if (!window.confirm("Delete this newsletter?")) return;

    const res = await deleteNewsletterApi(id);

    if (res.success) {
      alert("🗑️ Newsletter deleted successfully");
      loadNewsletters();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* 🔷 MAIN TITLE */}
        <h1 className="text-3xl font-bold text-center mb-10">
          Admin Dashboard
        </h1>

        {/* ================= POLICIES SECTION ================= */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">
            📄 Policies Management
          </h2>

          {/* ➕ ADD POLICY */}
          <div className="bg-white p-6 rounded-xl shadow mb-10">
            <h3 className="text-lg font-semibold mb-4">Add New Policy</h3>

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
            <h3 className="text-lg font-semibold mb-6">All Policies</h3>

            {policies.length === 0 ? (
              <p className="text-gray-500">No policies added yet</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {policies.map((p) => (
                  <div
                    key={p._id}
                    className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <h4 className="font-semibold">{p.title}</h4>

                    <div className="flex justify-between items-center mt-4">
                      <a
                        href={p.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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

        {/* 🔥 DIVIDER */}
        <div className="border-t border-gray-300 my-16"></div>

        {/* ================= GALLERY SECTION ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">
            🖼️ Gallery Management
          </h2>

          {/* ➕ ADD IMAGE */}
          <div className="bg-white p-6 rounded-xl shadow mb-10">
            <h3 className="text-lg font-semibold mb-4">Add Gallery Image</h3>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Image Title"
                value={imgTitle}
                onChange={(e) => setImgTitle(e.target.value)}
                className="border p-2 rounded w-full"
              />

              <input
                type="file"
                onChange={(e) => setImgFile(e.target.files[0])}
                className="border p-2 rounded w-full"
              />

              <button
                onClick={handleImageSubmit}
                className="bg-green-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-green-700"
              >
                Add Image
              </button>
            </div>
          </div>

          {/* 🖼️ IMAGE LIST */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Gallery Images</h3>

            {images.length === 0 ? (
              <p className="text-gray-500">No images added yet</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {images.map((img) => (
                  <div
                    key={img._id}
                    className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <img
                      src={img.imageUrl}
                      alt={img.title}
                      className="w-full h-40 object-cover rounded"
                    />

                    <p className="mt-2 font-medium">{img.title}</p>

                    <button
                      onClick={() => handleImageDelete(img._id)}
                      className="bg-red-600 text-white px-2 py-1 mt-2 rounded cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 🔥 DIVIDER */}
        <div className="border-t border-gray-300 my-16"></div>

        {/* ================= NEWSLETTER SECTION ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">
            📰 Newsletter Management
          </h2>

          {/* ➕ ADD NEWSLETTER */}
          <div className="bg-white p-6 rounded-xl shadow mb-10">
            <h3 className="text-lg font-semibold mb-4">Add Newsletter</h3>

            <div className="flex flex-col gap-3">
              <textarea
                placeholder="Content"
                value={newsContent}
                onChange={(e) => setNewsContent(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <input
                type="text"
                placeholder="Title"
                value={newsTitle}
                onChange={(e) => setNewsTitle(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <input
                type="text"
                placeholder="Date"
                value={newsDate}
                onChange={(e) => setNewsDate(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <input
                type="text"
                placeholder="Author"
                value={newsAuthor}
                onChange={(e) => setNewsAuthor(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <button
                onClick={handleNewsSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
              >
                Add Newsletter
              </button>
            </div>
          </div>

          {/* 📰 NEWSLETTER LIST */}
          <div>
            <h3 className="text-lg font-semibold mb-6">All Newsletters</h3>

            {newsletters.length === 0 ? (
              <p className="text-gray-500">No newsletters added yet</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {newsletters.map((n) => (
                  <div
                    key={n._id}
                    className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <h4 className="font-semibold">{n.title}</h4>

                    <p className="text-sm text-gray-500">
                      {n.date} | {n.author}
                    </p>

                    <button
                      onClick={() => handleNewsDelete(n._id)}
                      className="bg-red-600 text-white px-2 py-1 mt-2 rounded cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdminDashboard };
