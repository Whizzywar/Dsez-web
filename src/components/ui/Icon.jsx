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
  HiOutlineShare as HiShare,
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
  HiOutlineDocumentText as HiDoc,
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
  doc: HiDoc,

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
