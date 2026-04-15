import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SessionManager = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem("adminToken");
      const loginTime = localStorage.getItem("loginTime");

      const FIVE_MINUTES = 5 * 60 * 1000;

      if (token && loginTime) {
        const currentTime = Date.now();

        if (currentTime - loginTime > FIVE_MINUTES) {
          // 🔐 Auto logout
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminName");
          localStorage.removeItem("loginTime");

          alert("Session expired. Please login again.");

          window.location.href = "/admin-login";
        }
      }
    }, 5000); // check every 5 sec

    return () => clearInterval(interval);
  }, []);

  return null; // no UI
};

export { SessionManager };