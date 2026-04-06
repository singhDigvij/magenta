import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const counters = [
  { label: "Clients", value: 5137 },
  { label: "Branches", value: 8 },
  { label: "Districts", value: 8 },
  { label: "Portfolio", value: 9, suffix: " Crore" },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    counters.forEach((item, index) => {
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
  }, [inView]);

  return (
    <section className="py-10">
      <div
        ref={ref}
        className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
      >
        {counters.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-12 transition duration-300 group  cursor-pointer"
          >
            {/* Label */}
            <p className="text-sm uppercase tracking-wide text-gray-500 group-hover:text-pink-600 transition">
              {item.label}
            </p>

            {/* Value */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mt-4 group-hover:text-pink-600 transition">
              {counts[index].toLocaleString()}
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

export {Counter}