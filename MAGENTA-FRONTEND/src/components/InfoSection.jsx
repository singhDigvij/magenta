import { FaQuoteLeft } from "react-icons/fa";

const InfoSection = () => {
  return (
    <section
      className="relative h-170 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/infosection/infosection1.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 pt-24">
        {/* Card 1 */}
        <div className="relative bg-pink-600 text-white p-10 rounded-lg text-center shadow-lg">
          {/* Floating Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <FaQuoteLeft className="text-white text-6xl opacity-90" />
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Legal Status-MAGENTA
          </h3>

          <p className="text-sm leading-relaxed">
            Private Limited Company registered with RBI as NBFC-MFI (registered
            since 10.09.2017). It is a member of the MFIN and Sa-Dhan.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-pink-600 text-white p-10 rounded-lg text-center shadow-lg">
          {/* Floating Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <FaQuoteLeft className="text-white text-6xl opacity-90" />
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Our Presence- 6 Branches
          </h3>

          <ul className="text-sm text-left list-disc list-inside space-y-1">
            <li>Kaithal, Karnal (Haryana)</li>
            <li>Sangrur, Ladergaga (Punjab)</li>
            <li>Saharanpur, Chutmalpur (Uttar Pradesh)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { InfoSection };
