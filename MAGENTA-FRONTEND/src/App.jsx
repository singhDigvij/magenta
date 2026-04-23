// src/App.jsx
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

// Pages (create these)
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Products } from "./pages/Products.jsx";
import { BusinessModel } from "./pages/BusinessModel.jsx";
import { Gallery } from "./pages/Gallery.jsx";
import { Services } from "./pages/Services.jsx";
import { Downloads } from "./pages/Downloads.jsx";
import { Newsletter } from "./pages/Newsletter.jsx";
import { NewsletterDetail } from "./pages/NewsletterDetail.jsx";
import { AdminDashboard } from "./pages/AdminDashboard.jsx";
import { AdminLogin } from "./pages/AdminLogin.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { SessionManager } from "./components/SessionManager.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Board } from "./pages/BoardDirectors.jsx";
// import { Operation } from "./pages/Operation.jsx";

// import { Services } from "./pages/Services.jsx";
// import { Downloads } from "./pages/Downloads.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 200,
      easing: "ease-in-out",
      delay: 0,
    });

    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <SessionManager />
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollToTop />
        {/* Main Content */}
        <div className="grow">
          <Routes>
            {/* Add routes later */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/businessmodel" element={<BusinessModel />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/board" element={<Board />} />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/newsletter/:id" element={<NewsletterDetail />} />
            {/* <Route path="/operations" element={<Operation />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
