import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import DSEZHomepage from "./pages/DSEZHomepage";
import AboutPage from "./pages/AboutPage";
import InvestmentPage from "./pages/InvestmentPage";
import MediaPage from "./pages/MediaPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import PlaceholderPage from "./pages/PlaceholderPage";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <Routes>
          {/* ── Home ── */}
          <Route path="/" element={<DSEZHomepage />} />

          {/* ── About ── */}

          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/vision" element={<AboutPage />} />
          <Route path="/about/leadership" element={<AboutPage />} />
          <Route path="/about/master-plan" element={<AboutPage />} />
          <Route path="/about/governance" element={<AboutPage />} />

          {/* ── Investment ── */}
          <Route path="/invest" element={<InvestmentPage />} />
          <Route
            path="/invest/manufacturing"
            element={
              <PlaceholderPage title="Smart Manufacturing" section="Invest" />
            }
          />

          {/* ── Media page ── */}
          <Route path="/media" element={<MediaPage />} />
          <Route
            path="/media/news"
            element={<PlaceholderPage title="News & Events" section="Media" />}
          />

          <Route
            path="/invest/logistics"
            element={
              <PlaceholderPage title="Logistics Hubs" section="Invest" />
            }
          />
          <Route
            path="/invest/digital"
            element={
              <PlaceholderPage title="Digital Services" section="Invest" />
            }
          />
          <Route
            path="/invest/energy"
            element={<PlaceholderPage title="Green Energy" section="Invest" />}
          />
          <Route
            path="/invest/real-estate"
            element={
              <PlaceholderPage
                title="Commercial Real Estate"
                section="Invest"
              />
            }
          />

          {/* ── Faqs page ── */}
          <Route path="/faqs" element={<FaqPage />} />

          {/* ── Contact page ── */}
          <Route path="/contact" element={<ContactPage />} />

          {/* ── 404 ── */}
          <Route
            path="*"
            element={
              <PlaceholderPage title="Page Not Found" section="404" is404 />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
