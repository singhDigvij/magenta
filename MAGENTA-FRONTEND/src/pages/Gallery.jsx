import { useEffect, useState } from "react";
import { fetchImages } from "../api/galleryApi";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetchImages();
      if (res.success) setImages(res.images);
    };
    load();
  }, []);

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/gallery/gallery1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Gallery
          </h1>

          <p className="text-md md:text-base">
            <Link
              to="/"
              className="opacity-80 hover:text-pink-400 transition"
            >
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">Gallery</span>
          </p>
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img._id}
                onClick={() => setSelectedImage(img.imageUrl)}
                className="relative group overflow-hidden rounded-xl shadow cursor-pointer"
              >
                {/* IMAGE */}
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export { Gallery };