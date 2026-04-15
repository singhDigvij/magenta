import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  const loginTime = localStorage.getItem("loginTime");

  const ONE_HOUR = 5 * 60 * 1000; // 1 hour

  // 🔐 Check expiry
  if (token && loginTime) {
    const currentTime = Date.now();

    if (currentTime - loginTime > ONE_HOUR) {
      // ❌ Session expired → logout
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminName");
      localStorage.removeItem("loginTime");

      return <Navigate to="/admin-login" replace />;
    }
  }

  return token ? children : <Navigate to="/admin-login" replace />;
};

export { ProtectedRoute };