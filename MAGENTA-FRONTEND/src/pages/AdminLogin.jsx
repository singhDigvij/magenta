import { useState } from "react";
import { adminLoginApi } from "../api/adminApi.js";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!name || !password) {
      alert("Enter all fields");
      return;
    }

    const res = await adminLoginApi({ name, password });

    if (res.success) {
      localStorage.setItem("adminToken", res.token);
      localStorage.setItem("adminName", res.name);
      localStorage.setItem("loginTime", Date.now());

      window.location.href = "/admin-dashboard";
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/images/adminpage/admin.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Admin Login
          </h1>

          <p className="text-md md:text-base">
            <Link to="/" className="opacity-80 hover:text-pink-400 transition">
              Home
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-pink-400">Admin Login</span>
          </p>
        </div>
      </section>

      {/* ================= LOGIN FORM ================= */}
      <section className="py-16 bg-gray-50 flex justify-center">
        <div className="w-full max-w-md px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-6">
              Welcome Back 👋
            </h2>

            {/* Input Fields */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Admin Name"
                onChange={(e) => setName(e.target.value)}
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Button */}
            <button
              onClick={handleLogin}
              className="mt-6 bg-pink-600 hover:bg-pink-700 transition text-white w-full py-3 rounded-lg font-semibold cursor-pointer"
            >
              Login
            </button>

            {/* Optional hint */}
            <p className="text-xs text-gray-400 text-center mt-4">
              Authorized access only
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export { AdminLogin };
