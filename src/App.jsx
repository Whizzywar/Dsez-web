import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import DsezHomepage from "./Pages/DsezHomepage";
import AboutPage from "./Pages/AboutPage";
import InvestmentPage from "./Pages/InvestmentPage";
import MediaPage from "./Pages/MediaPage";
import FaqPage from "./Pages/FaqPage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import PlaceholderPage from "./Pages/PlaceholderPage";


const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <Routes>
          {/* ── Home ── */}
          <Route path="/" element={<DsezHomepage />} />

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

          {/* ── Media ─────────────────────────────────────────────────────────
           */}
          <Route
            path="/media"
            element={<Navigate to="/media/news" replace />}
          />
          <Route path="/media/news" element={<MediaPage />} />
          <Route
            path="/media/gallery"
            element={<GalleryPage/>}
          />

          {/* ── FAQs ── */}
          <Route path="/faqs" element={<FaqPage />} />

          {/* ── Contact ── */}
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
