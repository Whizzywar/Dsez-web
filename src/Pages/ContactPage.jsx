import { useState, useRef, useEffect } from "react";

import {
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineArrowPath,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

const subjects = [
  "Investment Inquiry",
  "Operational Support",
  "Media Relations",
  "Regulatory Framework",
  "Other",
];

// eslint-disable-next-line no-unused-vars
const contactInfo = [
  {
    Icon: HiOutlineEnvelope,
    label: "Email",
    primary: "invest@dsez.gov.int",
    secondary: "General: info@dsez.gov.int",
  },
  {
    Icon: HiOutlinePhone,
    label: "Phone",
    primary: "+1 (800) DSEZ-GOV",
    secondary: "Mon–Fri, 08:00–18:00 GMT+3",
  },
  {
    Icon: HiOutlineMapPin,
    label: "Headquarters",
    primary: "400 Innovation Drive",
    secondary: "Financial District, DSEZ 90210",
  },
  {
    Icon: HiOutlineClock,
    label: "Hours",
    primary: "Mon–Fri  08:00–18:00",
    secondary: "Saturday  09:00–13:00",
  },
];

// ─── Reveal hook ─────────────────────────────────────────────────────────────
const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ─── Contact form ─────────────────────────────────────────────────────────────
const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | done
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const set = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      setTimeout(() => {
        setStatus("idle");
        setForm({
          name: "",
          company: "",
          email: "",
          subject: subjects[0],
          message: "",
        });
      }, 3000);
    }, 1200);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-[#1a1c1c] " +
    "placeholder:text-gray-400 focus:outline-none focus:border-[#001e40] focus:ring-2 " +
    "focus:ring-[#001e40]/8 transition-all";

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <HiOutlineCheckCircle className="w-14 h-14 text-[#66dd8b]" />
        <h3 className="font-display text-xl font-black text-[#001e40]">
          Message Received
        </h3>
        <p className="text-[#4A4A4A] text-sm max-w-xs">
          Our investment desk will follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-1.5">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={set}
            placeholder="Jane Okafor"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-1.5">
            Company
          </label>
          <input
            name="company"
            type="text"
            value={form.company}
            onChange={set}
            placeholder="Acme Holdings Ltd."
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-1.5">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={set}
          placeholder="jane@company.com"
          className={inputCls}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-1.5">
          Subject
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={set}
          className={`${inputCls} cursor-pointer`}
        >
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={set}
          placeholder="How can we assist your operations?"
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#001e40] hover:bg-[#003366] active:scale-[0.99] text-white
                   font-bold py-3.5 rounded-lg transition-all flex items-center justify-center
                   gap-2.5 text-sm disabled:opacity-70 disabled:cursor-wait"
      >
        {status === "idle" && (
          <>
            Send Message <HiOutlinePaperAirplane className="w-4 h-4" />
          </>
        )}
        {status === "loading" && (
          <>
            Sending... <HiOutlineArrowPath className="w-4 h-4 animate-spin" />
          </>
        )}
      </button>
    </form>
  );
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="contact-pg">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="bg-[#001e40] -mt-20 pt-36 pb-20 px-4 md:px-16 relative overflow-hidden">
          {/* subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
            <div
              className="absolute -right-24 top-1/2 -translate-y-1/2 w-120 h-120
                            rounded-full border border-white/5 animate-[spin_50s_linear_infinite]"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                Get in Touch
              </h1>
              <p className="text-white/65 text-lg leading-relaxed">
                Reach our investment desk, regulatory team, or press office.
                Every inquiry is assigned to a named contact within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* ── Form + sidebar ───────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form — takes 2/3 */}
            <Reveal className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-black text-[#001e40] mb-7">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Sidebar — takes 1/3 */}
            <div className="space-y-5">
              {/* Priority hotline */}
              <Reveal delay={80}>
                <div className="bg-[#001e40] rounded-2xl p-7 text-white">
                  <p className="text-[10px] font-bold text-[#66dd8b] tracking-[0.2em] uppercase mb-3">
                    Priority Hotline
                  </p>
                  <p className="font-display text-2xl font-black mb-1">
                    +1 (800) DSEZ-GOV
                  </p>
                  <p className="text-white/55 text-xs leading-relaxed">
                    Direct line for registered investors and anchor tenants.
                    Available Mon–Fri, 08:00–18:00 GMT+3.
                  </p>
                </div>
              </Reveal>

              {/* Specialist desks */}
              <Reveal delay={140}>
                <div className="bg-white border border-gray-200 rounded-2xl p-7">
                  <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-5">
                    Specialist Desks
                  </p>
                  <ul className="space-y-4">
                    {[
                      { desk: "Investment", email: "invest@dsez.gov.int" },
                      { desk: "Regulatory", email: "compliance@dsez.gov.int" },
                      { desk: "Press", email: "press@dsez.gov.int" },
                    ].map(({ desk, email }) => (
                      <li
                        key={desk}
                        className="flex items-start justify-between gap-2 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <span className="text-xs font-bold text-[#001e40]">
                          {desk}
                        </span>
                        <a
                          href={`mailto:${email}`}
                          className="text-xs text-gray-400 hover:text-[#FF5722] transition-colors truncate"
                        >
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Map embed placeholder ─────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-16 pb-20">
          <Reveal>
            <div
              className="rounded-2xl overflow-hidden border border-gray-200 h-64 bg-gray-100
                            flex items-center justify-center relative"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBgWZVO94131r5JY3tpSsAuS9O_WklwMkptYDBWzal-BC3E4ZoyUasOjxSUCQE-9HkhTbnq7Y9PZJy8Tr_tQHkcc5XeY1omoRQLH_sKbACbGz3sjncTKAxRKHY9eWNx5gx6kgbayux9a9ua6q-ip8S2P5suSSR47OvYIf6IgJCye_d0xPFLsjGON8yETUKdN4NrhVzgBQR8yLQfBaHiYc6ZGsxUNGIvDXvKvJStFlMNopx9LBZMXUVpzhkzY9TtlHsBXMha2nCblqS"
                alt="DSEZ Headquarters location"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
              />
              <div
                className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-4
                              rounded-xl border border-gray-200 shadow-md text-center"
              >
                <p className="font-display font-bold text-[#001e40] text-sm">
                  DSEZ Central Authority Center
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  400 Innovation Drive, Financial District
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
