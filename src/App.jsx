import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// ── Pages ────────────────────────────────────────────────────────────────────
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";

/**
 * App
 * Wraps the whole site in <BrowserRouter>. Navbar and Footer render on
 * every route. Inner <Routes> swaps only the page content.
 *
 * Route map:
 *   /                          → HomePage
 *
 *   /about/vision              → About — Vision & Mission
 *   /about/leadership          → About — Leadership Team
 *   /about/master-plan         → About — Zone Master Plan
 *   /about/governance          → About — Governance & Compliance
 *
 *   /invest                    → Investment hub / CTA landing
 *   /invest/manufacturing      → Smart Manufacturing
 *   /invest/logistics          → Logistics Hubs
 *   /invest/digital            → Digital Services
 *   /invest/energy             → Green Energy
 *   /invest/real-estate        → Commercial Real Estate
 *
 *   /faqs                      → FAQs
 *   /contact                   → Contact Us
 *
 *   *                          → 404 fallback
 */
const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <Routes>
          {/* ── Home ── */}
          <Route path="/" element={<HomePage />} />

          {/* ── About ── */}
          <Route
            path="/about/vision"
            element={
              <PlaceholderPage title="Our Vision & Mission" section="About" />
            }
          />
          <Route
            path="/about/leadership"
            element={
              <PlaceholderPage title="Leadership Team" section="About" />
            }
          />
          <Route
            path="/about/master-plan"
            element={
              <PlaceholderPage title="Zone Master Plan" section="About" />
            }
          />
          <Route
            path="/about/governance"
            element={
              <PlaceholderPage
                title="Governance & Compliance"
                section="About"
              />
            }
          />

          {/* ── Investment ── */}
          <Route
            path="/invest"
            element={
              <PlaceholderPage title="Investment Hub" section="Invest" />
            }
          />
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

          {/* ── Flat pages ── */}
          <Route
            path="/faqs"
            element={
              <PlaceholderPage
                title="Frequently Asked Questions"
                section="Support"
              />
            }
          />
          <Route
            path="/contact"
            element={<PlaceholderPage title="Contact Us" section="Support" />}
          />

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
