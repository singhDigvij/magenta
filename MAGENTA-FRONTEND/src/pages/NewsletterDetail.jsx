import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleNewsletter } from "../api/newsletterApi";

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
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>

      <p className="text-gray-500 mb-6">
        {news.date} | {news.author}
      </p>

      <p className="leading-relaxed whitespace-pre-line">
        {news.content}
      </p>
    </div>
  );
};

export { NewsletterDetail };