import { Link } from "react-router-dom";
import { FaLightbulb, FaClipboardList, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/about/about1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Us</h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="opacity-80 hover:text-pink-400 transition">
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">About Us</span>
          </p>
        </div>
      </section>

      {/* ================= IDEA / PLAN / REALIZATION ================= */}
      <section className="grid md:grid-cols-3">
        {/* IDEA */}
        <div
          className="relative flex items-center justify-center text-center px-6 py-20 text-white"
          style={{
            backgroundImage: "url(/assets/images/about/about2.jpg)", 
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10">
            <FaLightbulb className="text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Idea</h3>
            <p className="text-sm leading-relaxed">
              The microfinance industry has emerged as an important player in
              the financial inclusion landscape, providing access to credit and
              other financial services to underserved communities and
              individuals. The Company, engaged in the business of microfinance,
              aims to provide affordable and innovative financial products and
              services to poor households in rural areas whose income is under
              ₹300,000.
            </p>
          </div>
        </div>

        {/* PLAN */}
        <div
          className="relative flex items-center justify-center text-center px-6 py-20 text-white"
          style={{
            backgroundImage: "url(/assets/images/about/about3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10">
            <FaClipboardList className="text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Plan</h3>
            <p className="text-sm leading-relaxed">
              The Company has a strong focus on social impact and aims to
              promote entrepreneurship and self-employment opportunities through
              its financial products and services. Its loan products are
              designed to cater to diverse needs of its customers, including
              income-generating activities, agriculture, education, and health.
              The Company also provides financial education and training to its
              customers to promote financial literacy and entrepreneurship.
            </p>
          </div>
        </div>

        {/* REALIZATION */}
        <div
          className="relative flex items-center justify-center text-center px-6 py-20 text-white"
          style={{
            backgroundImage: "url(/assets/images/about/about4.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10">
            <FaBullseye className="text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Realization</h3>
            <p className="text-sm leading-relaxed">
              Magenta follows the JLG model for its operations, wherein
              borrowers are organized into groups of 8–10 members and a minimum
              of three groups are required to constitute a Centre. Magenta
              provides loans of up to ₹70,000 to individual members in the group
              (JLG). The Company primarily targets rural women from low-income
              families belonging to poor or moderately poor households.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export { About };
