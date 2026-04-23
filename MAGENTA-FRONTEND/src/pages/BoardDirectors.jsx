import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";

const boardMembers = [
  {
    name: "ASOKKUMAR RATHNAM",
    role: "Independent Director",
    image: "/assets/images/directors/asok-kumar.jpg",
    desc: "Mr. Asok Kumar Rathnam is a veteran in the banking and microfinance sector in India. With over 45 years of experience, his insights and expertise have played a pivotal role in guiding Magenta towards sustainable growth and ethical practices.",
  },
  {
    name: "Tribikram Nayak",
    role: "Non-executive Director",
    image: "/assets/images/directors/tribikram.jpg",
    desc: "Mr. Tribikram Nayak's 30 years of experience in education, training, and social welfare initiatives add a valuable dimension to the board. His dedication to education and social development aligns with Magenta's commitment to holistic empowerment.",
  },
];

const teamMembers = [
  { name: "CS Renu Mittal", role: "Compliance Officer" },
  { name: "Manoj Kumar Sharma", role: "Operation Head" },
  { name: "Pramod Yadav", role: "Risk Manager" },
  { name: "Sabri Dasan", role: "MIS Officer" },
  // { name: "Ajay Kumar", role: "Accounts" },
  { name: "Shaba Khan", role: "HR" },
  { name: "Lakhan Ojha", role: "Tele-Caller" },
  // { name: "Alex Gray", role: "Developer" },
];

const Board = () => {
  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/team/team1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            About Board Of Directors
          </h1>

          <p className="text-md md:text-base">
            <Link to="/" className="opacity-80 hover:text-pink-400 transition">
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">About Board Of Directors</span>
          </p>
        </div>
      </section>

      {/* ================= BOARD DETAILS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <div data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full max-w-sm mx-auto rounded-xl shadow-md"
                />
              </div>

              {/* Content */}
              <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <p className="text-pink-600 font-medium mb-4">{member.role}</p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.desc}
                </p>

                {/* Social Icons */}
                <div className="flex gap-3">
                  {[FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="/"
                        className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition"
                      >
                        <Icon size={14} />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 flex justify-center items-center gap-2">
              Our Team
              <span className="w-2 h-2 bg-pink-600 rounded-full inline-block translate-y-2.5"></span>
            </h2>

            <div className="w-12 h-0.5 bg-gray-400 mx-auto mt-3 mb-12"></div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.role}</p>

                {/* Icons */}
                <div className="flex justify-center gap-3">
                  {[FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="/"
                        className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition"
                      >
                        <Icon size={12} />
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { Board };
