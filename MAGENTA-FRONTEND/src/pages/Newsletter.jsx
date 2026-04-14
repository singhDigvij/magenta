import { useEffect, useState } from "react";
import { fetchNewsletters } from "../api/newsletterApi";
import { useNavigate } from "react-router-dom";

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
  );
};

export { Newsletter };