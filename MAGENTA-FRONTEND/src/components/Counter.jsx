import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getCounters } from "../api/counterApi.js";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [data, setData] = useState([]);
  const [counts, setCounts] = useState([]);

  // 🔥 Fetch from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCounters();

        const formatted = [
          { label: "Clients", value: Number(result[1]) },
          { label: "Branches", value: Number(result[0]) },
          { label: "Districts", value: Number(result[2]) },
          {
            label: "Portfolio",
            value: parseFloat(result[3]), // number for animation
            suffix: " Crore", // keep UI same
          },
        ];

        setData(formatted);
        setCounts(formatted.map(() => 0));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // 🔥 Counter Animation
  useEffect(() => {
    if (!inView || data.length === 0) return;

    data.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 2000;
      const incrementTime = 20;
      const step = end / (duration / incrementTime);

      const timer = setInterval(() => {
        start += step;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] =
            start >= end ? end : Math.floor(start);
          return updated;
        });

        if (start >= end) clearInterval(timer);
      }, incrementTime);
    });
  }, [inView, data]);

  return (
    <section className="py-10">
      <div
        ref={ref}
        className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-12 transition duration-300 group cursor-pointer"
          >
            {/* Label */}
            <p className="text-sm uppercase tracking-wide text-gray-500 group-hover:text-pink-600 transition">
              {item.label}
            </p>

            {/* Value */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mt-4 group-hover:text-pink-600 transition">
              {counts[index]?.toLocaleString()}
              {item.suffix && (
                <span className="text-3xl ml-1">
                  {item.suffix}
                </span>
              )}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Counter };