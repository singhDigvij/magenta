import { Link } from "react-router-dom";
import { FaWrench, FaBook, FaFlag, FaCog } from "react-icons/fa";

const BusinessModelSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* ================= LEFT CONTENT ================= */}
          <div data-aos="zoom-in" data-aos-delay="200">
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Business Model
            </h3>

            <p className="text-gray-600 mb-8">
              We work with women from rural and semi-urban areas
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-pink-600 text-white p-3 rounded-full">
                  <FaWrench size={14} />
                </div>
                <p className="text-gray-700 text-md">
                  Group Formation and KYC Onboarding
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-600 text-white p-3 rounded-full">
                  <FaBook size={14} />
                </div>
                <p className="text-gray-700 text-md">
                  Financial Literacy and training
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-600 text-white p-3 rounded-full">
                  <FaFlag size={14} />
                </div>
                <p className="text-gray-700 text-md">
                  Loan Sanction and Disbursement
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-600 text-white p-3 rounded-full">
                  <FaCog size={14} />
                </div>
                <p className="text-gray-700 text-md">
                  Periodic Collection Online and Offline
                </p>
              </div>
            </div>

            {/* Button */}
            <Link
              to="/businessmodel"
              className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition"
            >
              Know More
            </Link>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div data-aos="fade-left" data-aos-delay="400">
            <img
              src="/assets/images/businessmodel/businessmodel1.jpg"
              alt="Business Model"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { BusinessModelSection };
