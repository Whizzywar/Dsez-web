import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/ui/Icon";

/**
 * PlaceholderPage
 * Displayed for all routes that don't yet have a real page built.
 * Shows the page title, section badge, back button, and a home CTA.
 */
const PlaceholderPage = ({ title, section, is404 = false }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Section badge */}
        <div className="inline-flex items-center gap-2 bg-[#001e40]/8 text-[#001e40] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
          {is404 ? "404" : section}
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl font-black text-[#001e40] mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-[#4A4A4A] text-lg mb-10 leading-relaxed">
          {is404
            ? "The page you're looking for doesn't exist or has been moved."
            : "This page is currently under construction. Check back soon."}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 border-2 border-[#001e40] text-[#001e40] font-bold px-8 py-3 rounded-lg hover:bg-[#001e40] hover:text-white transition-all"
          >
            <Icon name="arrowRight" className="w-4 h-4 rotate-180" />
            Go Back
          </button>
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold px-8 py-3 rounded-lg transition-all shadow-md"
          >
            <Icon name="home" className="w-4 h-4" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
