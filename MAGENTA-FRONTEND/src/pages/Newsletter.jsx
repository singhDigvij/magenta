import { useEffect, useState } from "react";
import { fetchNewsletters } from "../api/newsletterApi.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const [newsletters, setNewsletters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const res = await fetchNewsletters();
      if (res.success) setNewsletters(res.newsletters);
    };
    load();
  }, []);

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/newsletter/newsletter1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Newsletter
          </h1>

          <p className="text-md md:text-base">
            <Link to="/" className="opacity-80 hover:text-pink-400 transition">
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">Newsletter</span>
          </p>
        </div>
      </section>

      <div className="p-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Newsletter</h1>

        {newsletters.map((n) => (
          <div
            key={n._id}
            onClick={() => navigate(`/newsletter/${n._id}`)}
            className="border-b py-4 cursor-pointer hover:text-pink-600"
          >
            <h2 className="font-semibold">{n.title}</h2>
            <p className="text-sm text-gray-500">
              {n.date} | {n.author}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export { Newsletter };
