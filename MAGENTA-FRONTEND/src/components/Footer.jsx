import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchNewsletters } from "../api/newsletterApi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [newsletters, setNewsletters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const res = await fetchNewsletters();
      if (res.success) setNewsletters(res.newsletters);
    };

    load();

    // 🔥 Auto refresh every 2 seconds
    const interval = setInterval(load, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      {/* Top Section */}
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-8">
          <h2 className="text-lg font-semibold text-white">Magenta Finance</h2>

          <img
            src="/assets/images/logo.png"
            alt="Magenta Logo"
            className="max-h-15 my-4 md:my-0"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Social Networks:</span>

            <a href="#" className="hover:text-[#d63384]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#d63384]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#d63384]">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">ABOUT US</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Magenta is a member of the Microfinance Institutions Network
              (MFIN) and Sa-Dhan, which are Self-Regulatory Organizations
              recognized by the RBI to oversee MFIs. The members of SROs follow
              a standard conduct in procedures and processes that help promote
              an ethical way of doing business and bring the confidence of
              investors and borrowers in the member company.
            </p>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-white font-semibold mb-4">LATEST NEWS</h3>

            <div className="space-y-3 text-sm">
              {newsletters.slice(0, 3).map((n) => (
                <p
                  key={n._id}
                  onClick={() => navigate(`/newsletter/${n._id}`)}
                  className="hover:text-[#d63384] cursor-pointer"
                >
                  {n.title}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">CONTACT INFO</h3>

            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#d63384] mt-1" />
                <p className="text-gray-400">
                  Shop/Unit No. 07, 2nd Floor, Plot No.7, Local Shopping Center,
                  Sector-B, Pocket-1, Vasant Kunj, New Delhi-110070
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#d63384]" />
                <a
                  href="mailto:info@magentafinance.co.in"
                  className="hover:text-[#d63384] transition"
                >
                  info@magentafinance.co.in
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#d63384]" />
                <a
                  href="tel:01149075204"
                  className="hover:text-[#d63384] transition"
                >
                  011-490 75 204
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#d63384]" />
                <a
                  href="tel:1800102638"
                  className="hover:text-[#d63384] transition"
                >
                  1800-1020-638
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          © 2026 Magenta Finance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export { Footer };
