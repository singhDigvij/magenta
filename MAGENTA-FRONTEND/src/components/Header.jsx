import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { LoanFormModal } from "./LoanFormModal.jsx";

const Header = () => {
  const [adminName, setAdminName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // ✅ Sync with localStorage
  useEffect(() => {
    const name = localStorage.getItem("adminName");
    setAdminName(name);
  }, []);

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    window.location.href = "/";
  };

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

              <div className="absolute left-0 top-full h-3 w-full"></div>

              <div className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600"
                >
                  About Us
                </Link>
                <Link
                  to="/board"
                  className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600"
                >
                  About Board Of Directors
                </Link>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600"
                >
                  Gallery
                </Link>
              </div>
            </div>

            {/* Services */}
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
            <Link to="/newsletter" className="hover:text-pink-600">
              Newsletter
            </Link>

            {/* 🔐 ADMIN UI (DESKTOP) */}
            {adminName ? (
              <div className="flex items-center gap-3">
                <span className="text-pink-600 font-semibold">
                  Hello {adminName}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white cursor-pointer px-3 py-1 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/admin-login" className="hover:text-pink-600">
                Login
              </Link>
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 text-sm font-semibold rounded transition"
            >
              Contact Us
            </Link>

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
        <div className="lg:hidden border-t px-4 py-4 bg-white text-sm space-y-4">
          {/* Links */}
          <Link
            to="/"
            className="block py-1 hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* About */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full text-left py-1 hover:text-pink-600"
            >
              About
            </button>

            {aboutOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-pink-600"
                >
                  About Us
                </Link>

                <Link
                  to="/board"
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-pink-600"
                >
                  About Board Of Directors
                </Link>

                <Link
                  to="/gallery"
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-pink-600"
                >
                  Gallery
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left py-1 hover:text-pink-600"
            >
              Services
            </button>

            {servicesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link
                  to="/businessmodel"
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-pink-600"
                >
                  Our Business Model
                </Link>

                <Link
                  to="/products"
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-pink-600"
                >
                  Our Products
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/downloads"
            className="block py-1"
            onClick={() => setMenuOpen(false)}
          >
            Downloads
          </Link>

          <Link
            to="/newsletter"
            className="block py-1"
            onClick={() => setMenuOpen(false)}
          >
            Newsletter
          </Link>

          {/* 🔥 Divider */}
          <div className="border-t pt-3"></div>

          {/* 🔐 ADMIN UI */}
          {adminName ? (
            <div className="flex flex-col gap-3">
              <span className="text-pink-600 font-semibold">
                Hello {adminName}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/admin-login" className="block py-1">
              Login
            </Link>
          )}
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
