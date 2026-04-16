import { Link } from "react-router-dom";
import { useState } from "react";
import { createContactApi } from "../api/contactApi.js";

const Contact = () => {
  // 🔹 State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // 🔹 Handle Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.phone
    ) {
      alert("Please fill required fields");
      return;
    }

    const res = await createContactApi(formData);

    if (res.success) {
      alert("✅ Message sent successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert(res.message);
    }
  };

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/contact/contact1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Contact Us
          </h1>

          <p className="text-md md:text-base">
            <Link to="/" className="opacity-80 hover:text-pink-400 transition">
              Home
            </Link>

            <span className="mx-2">{">"}</span>

            <span className="text-pink-400">Contact Us</span>
          </p>
        </div>
      </section>

      {/* ================= CONTACT STRIP (LIKE IMAGE) ================= */}
      <section className="grid md:grid-cols-3">
        {/* LOCATION */}
        <div className="bg-gray-100 py-16 px-6 text-center flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Location</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Shop 07, 2nd Floor, Plot No.7, Local Shopping Center,
            <br />
            Sector-B, Pocket-1, Vasant Kunj, New Delhi-110070
          </p>
        </div>

        {/* EMAIL */}
        <div className="bg-gray-100 py-16 px-6 text-center flex flex-col justify-center border-t md:border-t-0 md:border-l">
          <h3 className="text-2xl font-semibold mb-4">Email Us</h3>

          <a
            href="mailto:info@magentafinance.co.in"
            className="text-gray-700 underline hover:text-pink-600 transition"
          >
            info@magentafinance.co.in
          </a>
        </div>

        {/* PHONE (DARK) */}
        <div className="bg-black text-white py-16 px-6 text-center flex flex-col justify-center border-t md:border-t-0 md:border-l">
          <h3 className="text-2xl font-semibold mb-4">Let’s talk</h3>

          <a
            href="tel:01149075204"
            className="underline hover:text-pink-400 transition"
          >
            011-490 75 204
          </a>
        </div>
      </section>

      {/* ================= GET IN TOUCH FORM ================= */}
      <section className="py-20 bg-linear-to-b from-gray-500 to-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-semibold flex justify-center items-center gap-2">
              Get In Touch
              <span className="w-2 h-2 bg-pink-600 rounded-full inline-block translate-y-2.5"></span>
            </h2>
            <div className="w-12 h-0.5 bg-gray-300 mx-auto mt-3"></div>
          </div>

          {/* Form */}
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm outline-none focus:border-pink-500"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm outline-none focus:border-pink-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm outline-none focus:border-pink-500"
            />

            {/* Message */}
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write something ..."
              className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm outline-none focus:border-pink-500 resize-none"
            ></textarea>

            {/* Button */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full text-sm cursor-pointer font-semibold tracking-wide transition"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="w-full h-162.5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5098616873497!2d77.15684567450548!3d28.524390788985112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d55b1277a19%3A0x213e2f85a34e32cd!2sMagenta%20Finance%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1776315605498!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export { Contact };
