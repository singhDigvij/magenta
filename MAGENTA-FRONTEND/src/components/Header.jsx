import { useState } from "react";
import { Link } from "react-router-dom";
// import { LoanFormModal } from "./LoanFormModal.jsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="Magenta Logo"
                className="max-h-20 max-w-30 w-auto h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium text-gray-800 items-center">
            <Link to="/" className="hover:text-pink-600">
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-pink-600">About</span>

              {/* Invisible hover bridge */}
              <div className="absolute left-0 top-full h-3 w-full"></div>

              {/* Dropdown */}
              <div className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600"
                >
                  About Us
                </Link>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600"
                >
                  Gallery
                </Link>
              </div>
            </div>

            {/* ✅ Services Dropdown (NEW) */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-pink-600">
                Services
              </span>

              <div className="absolute left-0 top-full h-3 w-full"></div>

              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <Link
                  to="/businessmodel"
                  className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600"
                >
                  Our Business Model
                </Link>
                <Link
                  to="/products"
                  className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600"
                >
                  Our Products
                </Link>
              </div>
            </div>

            <Link to="/downloads" className="hover:text-pink-600">
              Downloads
            </Link>
            <Link to="/policies" className="hover:text-pink-600">
              Policies
            </Link>

            {/* MIS Login */}
            {/* <a href="#" className="hover:text-pink-600">
              MIS Login
            </a> */}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Contact Button */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-pink-600 hover:bg-pink-700 cursor-pointer text-white px-4 py-2 text-sm font-semibold rounded transition"
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col gap-0.75 w-6 h-6 justify-center items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="w-full h-0.5 bg-gray-800" />
              <span className="w-full h-0.5 bg-gray-800" />
              <span className="w-full h-0.5 bg-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t px-4 py-4 space-y-3 bg-white text-sm">
          <Link
            to="/"
            className="block hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile About Dropdown */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full text-left hover:text-pink-600"
            >
              About
            </button>

            {aboutOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/about"
                  className="block hover:text-pink-600"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/gallery"
                  className="block hover:text-pink-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Gallery
                </Link>
              </div>
            )}
          </div>

          {/* ✅ Services Mobile Dropdown (NEW) */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left hover:text-pink-600"
            >
              Services
            </button>

            {servicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/businessmodel"
                  className="block hover:text-pink-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Our Business Model
                </Link>
                <Link
                  to="/products"
                  className="block hover:text-pink-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Our Products
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/downloads"
            className="block hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            Downloads
          </Link>
          <Link
            to="/policies"
            className="block hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            Policies
          </Link>

          {/* <a
            href="#"
            className="block hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            MIS Login
          </a> */}
        </div>
      )}

      {/* Contact Modal */}
      {/* <LoanFormModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      /> */}
    </header>
  );
};

export { Header };
