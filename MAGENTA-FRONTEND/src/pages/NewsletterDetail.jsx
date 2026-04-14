import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleNewsletter } from "../api/newsletterApi.js";
import { Link } from "react-router-dom";

const NewsletterDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetchSingleNewsletter(id);
      if (res.success) setNews(res.newsletter);
    };
    load();
  }, [id]);

  if (!news) return <p className="p-10">Loading...</p>;

  return (
    <>
    {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/newsletter/newsletterdetail.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Newsletter Detail
          </h1>

          <p className="text-md md:text-base">
            <Link to="/" className="opacity-80 hover:text-pink-400 transition">
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">Newsletter Detail</span>
          </p>
        </div>
      </section>


    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>

      <p className="text-gray-500 mb-6">
        {news.date} | {news.author}
      </p>

      <p className="leading-relaxed whitespace-pre-line">
        {news.content}
      </p>
    </div>
    </>
  );
};

export { NewsletterDetail };