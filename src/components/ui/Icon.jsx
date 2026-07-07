/**
 * Icon.jsx — react-icons wrapper
 * ─────────────────────────────────────────────────────────────────────────────
 * Install once:   npm install react-icons
 *
 * This file provides two things:
 *
 *  1. A drop-in <Icon name="..." className="..." /> component that maps every
 *     name your project already uses to a specific react-icons icon — so
 *     nothing else in the codebase needs to change.
 *
 *  2. Named exports for anything that needs a direct import
 *     (e.g. LinkedInIcon, regulatoryItems used by AboutPage).
 *
 * Icon packs used (all included in react-icons, no extra install needed):
 *   HiOutline*  — Heroicons v2 outline  (navigation, UI)
 *   HiSolid*    — Heroicons v2 solid    (filled variants)
 *   Ri*         — Remix Icons            (logos, social)
 *   Tb*         — Tabler Icons           (industry, finance)
 *
 * Usage (unchanged from before):
 *   import Icon from "@/components/ui/Icon";
 *   <Icon name="arrowRight" className="w-5 h-5 text-white" />
 *
 * Direct import (when you need the raw component):
 *   import { HiOutlineArrowRight } from "react-icons/hi2";
 *
 */

// ── Heroicons v2 outline ──────────────────────────────────────────────────────
import {
  HiOutlineBars3 as HiBars3,
  HiOutlineXMark as HiXMark,
  HiOutlineChevronDown,
  HiOutlineArrowRight,
  HiOutlineArrowTrendingUp,
  HiOutlineArrowDownTray as HiDownload,
  HiOutlinePaperAirplane as HiSend,
  HiOutlineChartBar as HiAnalytics,
  HiOutlineBuildingOffice as HiFactory,
  HiOutlineGlobeAlt as HiGlobe,
  HiOutlineCloud,
  HiOutlineBolt,
  HiOutlineEye as HiEye,
  HiOutlineBuildingOffice2 as HiOffice,
  HiOutlineMapPin as HiMap,
  HiOutlinePhone,
  HiOutlineEnvelope as HiMail,
  HiOutlineArrowTopRightOnSquare as HiExternalLink,
  HiOutlineShare as HiShare, // ← was HiOutlineShareNodes (wrong name)
  HiOutlineHome,
  HiOutlineInformationCircle as HiInfo,
  HiOutlineBriefcase,
  HiOutlineQuestionMarkCircle as HiQuestionMark,
  HiOutlineChatBubbleLeftRight as HiContact,
  HiOutlinePhoto,
  HiOutlineNewspaper,
  HiOutlineCalendarDays as HiCalendar,
  HiOutlineTag,
  HiOutlinePlayCircle as HiPlay,
  HiOutlineXCircle as HiClose2,
  HiOutlineShieldCheck as HiShield,
  HiOutlineScale as HiScale,
  HiOutlineDocumentText as HiDoc, // ← replaces HiDocument from hi (v1)
} from "react-icons/hi2";

// ── Remix Icons (social logos) ────────────────────────────────────────────────
import {
  RiLinkedinFill,
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiWhatsappFill,
} from "react-icons/ri";

// ── Tabler Icons (industry / finance extras) ──────────────────────────────────
import {
  TbReceipt2 as TbReceipt,
  TbExchange,
  TbLeaf,
  TbQuote,
  TbShip,
} from "react-icons/tb";

// ─────────────────────────────────────────────────────────────────────────────
// 1. Drop-in <Icon> component — identical API to the old file
//    All existing  <Icon name="..." className="..." />  calls keep working.
// ─────────────────────────────────────────────────────────────────────────────

const iconMap = {
  // ── Navigation ──────────────────────────────────────────
  menu: HiBars3,
  close: HiXMark,
  close2: HiClose2,
  eye: HiEye,
  chevronDown: HiOutlineChevronDown,
  arrowRight: HiOutlineArrowRight,

  // ── Business / Finance ──────────────────────────────────
  trendingUp: HiOutlineArrowTrendingUp,
  analytics: HiAnalytics,
  briefcase: HiOutlineBriefcase,
  receipt: TbReceipt,

  // ── Communication ───────────────────────────────────────
  send: HiSend,
  phone: HiOutlinePhone,
  mail: HiMail,
  contact: HiContact,

  // ── Actions ─────────────────────────────────────────────
  download: HiDownload,
  externalLink: HiExternalLink,
  share: HiShare,

  // ── Infrastructure / Industry ───────────────────────────
  factory: HiFactory,
  office: HiOffice,
  bolt: HiOutlineBolt,
  leaf: TbLeaf,
  ship: TbShip,

  // ── Maps / Location ─────────────────────────────────────
  globe: HiGlobe,
  map: HiMap,

  // ── Cloud / Tech ────────────────────────────────────────
  cloud: HiOutlineCloud,

  // UI / Content
  info: HiInfo,
  questionMark: HiQuestionMark,
  shield: HiShield,
  scale: HiScale,
  doc: HiDoc, // ← HiOutlineDocumentText (hi2), NOT HiDocument (hi v1)

  photo: HiOutlinePhoto,
  newspaper: HiOutlineNewspaper,
  calendar: HiCalendar,
  tag: HiOutlineTag,
  play: HiPlay,
  quote: TbQuote,

  // ── Social ──────────────────────────────────────────────
  linkedin: RiLinkedinFill,
  twitter: RiTwitterXFill,
  facebook: RiFacebookFill,
  instagram: RiInstagramFill,
  youtube: RiYoutubeFill,
  whatsapp: RiWhatsappFill,
};

/**
 * <Icon>
 * Drop-in replacement — same props as before.
 *
 * @param {string}  name       — key from iconMap above
 * @param {string}  className  — Tailwind size + colour classes (e.g. "w-5 h-5 text-white")
 * @param {string}  title      — accessible label for screen readers
 */
const Icon = ({ name, className = "w-6 h-6", title, ...rest }) => {
  const Component = iconMap[name];

  if (!Component) {
    if (typeof import.meta !== "undefined" && import.meta.env?.DEV) {
      console.warn(
        `[Icon] Unknown icon name: "${name}". ` +
          `Available: ${Object.keys(iconMap).join(", ")}`,
      );
    }
    return null;
  }

  return (
    <Component
      className={className}
      aria-hidden={!title}
      aria-label={title}
      title={title}
      {...rest}
    />
  );
};

export default Icon;

// ─────────────────────────────────────────────────────────────────────────────
// 2. Named exports used by other files (AboutPage, Footer, etc.)
// ─────────────────────────────────────────────────────────────────────────────

/** Used by AboutPage:  import { LinkedInIcon } from "../components/ui/Icon" */
export const LinkedInIcon = ({ className = "w-4 h-4", ...rest }) => (
  <RiLinkedinFill className={className} {...rest} />
);

/**
 * Used by AboutPage:  import { regulatoryItems } from "../components/ui/Icon"
 * Icons are now react-icons components instead of raw SVG JSX.
 */

// eslint-disable-next-line react-refresh/only-export-components
export const regulatoryItems = [
  {
    icon: <HiScale className="w-6 h-6" />,
    title: "Independent Judiciary",
    body: "A dedicated commercial court system for swift dispute resolution based on international law.",
  },
  {
    icon: <HiShield className="w-6 h-6" />,
    title: "Capital Protection",
    body: "Guarantees against expropriation and 100% foreign ownership of companies and assets.",
  },
  {
    icon: <HiDoc className="w-6 h-6" />, // ← HiDoc (hi2), not HiDocument (hi v1)
    title: "One-Stop Licensing",
    body: "Streamlined digital permitting process reducing registration time to less than 48 hours.",
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// 3. Re-export raw react-icons for direct use anywhere in the project
//    (avoids double-importing the same pack in other files)
// ─────────────────────────────────────────────────────────────────────────────
export {
  // Heroicons
  HiBars3,
  HiXMark,
  HiOutlineChevronDown,
  HiOutlineArrowRight,
  HiOutlineArrowTrendingUp,
  HiDownload,
  HiSend,
  HiAnalytics,
  HiFactory,
  HiGlobe,
  HiOutlineCloud,
  HiOutlineBolt,
  HiEye,
  HiOffice,
  HiMap,
  HiOutlinePhone,
  HiMail,
  HiExternalLink,
  HiShare,
  HiOutlineHome,
  HiInfo,
  HiQuestionMark,
  HiContact,
  HiOutlinePhoto,
  HiOutlineNewspaper,
  HiCalendar,
  HiOutlineTag,
  HiPlay,
  HiClose2,
  HiShield,
  HiScale,
  HiDoc,
  RiLinkedinFill,
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiWhatsappFill,
  TbReceipt,
  TbExchange,
  TbLeaf,
  TbQuote,
  TbShip,
};
