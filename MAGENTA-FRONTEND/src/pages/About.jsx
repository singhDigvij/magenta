import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaLightbulb,
  FaClipboardList,
  FaBullseye,
  FaFileAlt,
  FaQuestionCircle,
  FaUsers,
  FaCogs,
} from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("license");

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

          <p className="text-md md:text-base">
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
            <p className="text-md leading-relaxed">
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
            <p className="text-md leading-relaxed">
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
            <p className="text-md leading-relaxed">
              Magenta follows the JLG model for its operations, wherein the
              borrowers are organized into groups of 5-8 members and a minimum
              of three groups are required to constitute a Centre. <br />
              Magenta provides loans of up to ₹ 70,000 to individual members in
              the group (JLG). Magenta’s target segment comprises rural women
              from low-income families who come from poor/moderately poor-income
              households.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FULL IMAGE SECTION ================= */}
      <section>
        <img
          src="/assets/images/about/about5.jpg"
          alt="about"
          className="w-full h-100 object-cover"
          data-aos="fade-up"
        />
      </section>

      {/* ================= COMPANY SECTION ================= */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/images/about/about7.jpg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-semibold inline-flex items-center gap-2">
              The Company
              <span className="w-2 h-2 bg-pink-600 rounded-full translate-y-2.5"></span>
            </h2>

            <div className="w-10 h-0.5 bg-gray-400 mx-auto mt-3"></div>
          </div>

          {/* CONTENT GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div
              data-aos="fade-right"
              className="flex justify-center md:justify-start"
            >
              <img
                src="/assets/images/about/about6.png"
                alt="magenta"
                className="w-[85%] md:w-full object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              {/* ICON TABS (TOP STYLE) */}
              <div className="flex justify-between mb-8" data-aos="fade-left">
                {[
                  { id: "license", icon: <FaFileAlt />, label: "LICENCE" },
                  { id: "why", icon: <FaQuestionCircle />, label: "WHY" },
                  {
                    id: "association",
                    icon: <FaUsers />,
                    label: "ASSOCIATION",
                  },
                  { id: "process", icon: <FaCogs />, label: "PROCESS" },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    {/* ICON */}
                    <span
                      className={`text-3xl mb-3 transition ${
                        activeTab === item.id
                          ? "text-pink-500"
                          : "text-black group-hover:text-pink-400"
                      }`}
                    >
                      {item.icon}
                    </span>

                    {/* LABEL */}
                    <span
                      className={`text-sm md:text-base font-semibold tracking-wide transition ${
                        activeTab === item.id
                          ? "text-pink-500"
                          : "text-gray-700 group-hover:text-pink-400"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CONTENT (FIX HEIGHT TO STOP JUMPING) */}
              <div className="min-h-45" data-aos="fade-left">
                {activeTab === "license" && (
                  <p className="text-md leading-relaxed text-gray-950">
                    Magenta Finance Services Private Limited (MAGENTA) is a
                    private limited company having CIN: U65191DL2010PTC289124.
                    MAGENTA is formed to engage in the business of microfinance
                    as permitted by RBI under the NBFC-MFI category. MAGENTA
                    received an NBFC-MFI license from RBI on 10th November 2017.
                    MAGENTA is promoted by a Foreign Company, namely Nellcome
                    Ltd. (Holding Company).
                  </p>
                )}

                {activeTab === "why" && (
                  <p className="text-md leading-relaxed text-gray-950">
                    The necessity of starting an NBFC-MFI is attributed
                    primarily to bring necessary professional and regulatory
                    framework to rapidly scale up microfinance operations. It
                    allows the entity to raise equity from the commercial and
                    impact investors and also assist the Board to raise funds
                    from the commercial loan market.
                  </p>
                )}

                {activeTab === "association" && (
                  <p className="text-md leading-relaxed text-gray-950">
                    Magenta is a member of Microfinance Institutions Network
                    (MFIN) which is a Self-Regulatory Organization nominated by
                    the RBI to oversee MFIs. Magenta’s target segment comprises
                    rural women from low-income families who come from
                    poor/moderately poor income households.
                  </p>
                )}

                {activeTab === "process" && (
                  <p className="text-md leading-relaxed text-gray-950">
                    Magenta follows JLG model for its operations, wherein the
                    borrowers are organized into groups of 8-10 members and
                    minimum three groups are required to constitute a Centre.
                    Magenta provides loans of up to ₹ 70,000 to individual
                    members in the group (JLG).
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { About };
