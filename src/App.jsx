export default function DSEZHomepage() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileInvestOpen, setMobileInvestOpen] = useState(false);
  const [email, setEmail] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

    {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg h-16"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100 h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-16 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 text-[#003366] lg:hidden"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" className="w-7 h-7" />
            </button>
            <span className="font-display text-2xl font-black text-[#003366] tracking-tight">
              DS<span className="text-[#FF5722]">EZ</span>
            </span>
          </div>
 
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            <a
              href="#"
              className="font-bold text-sm tracking-wide text-[#FF5722] border-b-2 border-[#FF5722] h-full flex items-center"
            >
              Home
            </a>
            <DropdownMenu label="About Us" items={aboutItems} isScrolled={scrolled} />
            <DropdownMenu
              label="Investment Opportunities"
              items={investmentItems}
              isScrolled={scrolled}
            />
            <a
              href="#"
              className="font-bold text-sm tracking-wide text-[#43474f] hover:text-[#FF5722] transition-colors h-full flex items-center"
            >
              FAQs
            </a>
            <a
              href="#"
              className="font-bold text-sm tracking-wide text-[#43474f] hover:text-[#FF5722] transition-colors h-full flex items-center"
            >
              Contact
            </a>
          </nav>
 
          {/* CTA */}
          <button className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-bold text-sm px-6 py-2.5 rounded-lg shadow-md transition-all duration-150 flex items-center gap-2">
            Invest Now
            <Icon name="trendingUp" className="w-4 h-4" />
          </button>
        </div>
      </header>
 
      {/* ── MOBILE DRAWER ── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[55] backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      <aside
        className={`fixed left-0 top-0 h-full z-[60] bg-white shadow-2xl w-80 transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <span className="font-display text-xl font-black text-[#003366]">
            DS<span className="text-[#FF5722]">EZ</span> Global
          </span>
          <button onClick={() => setDrawerOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
            <Icon name="close" className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {[
            { label: "Home", icon: "home" },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 p-4 bg-[#003366] text-white rounded-xl font-semibold"
            >
              <Icon name={item.icon} className="w-5 h-5" />
              {item.label}
            </a>
          ))}
 
          {/* About accordion */}
          <div>
            <button
              className="w-full flex items-center gap-3 p-4 text-[#43474f] hover:bg-gray-50 rounded-xl font-semibold transition-all"
              onClick={() => setMobileAboutOpen((v) => !v)}
            >
              <Icon name="info" className="w-5 h-5" />
              <span className="flex-1 text-left">About Us</span>
              <span className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}>
                <Icon name="chevronDown" className="w-4 h-4" />
              </span>
            </button>
            {mobileAboutOpen && (
              <div className="ml-4 pl-4 border-l-2 border-gray-100 space-y-1 mt-1">
                {aboutItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 p-3 text-sm text-[#43474f] hover:text-[#FF5722] rounded-lg transition-colors font-medium"
                  >
                    <Icon name={item.icon} className="w-4 h-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
 
          {/* Investment accordion */}
          <div>
            <button
              className="w-full flex items-center gap-3 p-4 text-[#43474f] hover:bg-gray-50 rounded-xl font-semibold transition-all"
              onClick={() => setMobileInvestOpen((v) => !v)}
            >
              <Icon name="briefcase" className="w-5 h-5" />
              <span className="flex-1 text-left">Investment Opportunities</span>
              <span className={`transition-transform ${mobileInvestOpen ? "rotate-180" : ""}`}>
                <Icon name="chevronDown" className="w-4 h-4" />
              </span>
            </button>
            {mobileInvestOpen && (
              <div className="ml-4 pl-4 border-l-2 border-gray-100 space-y-1 mt-1">
                {investmentItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 p-3 text-sm text-[#43474f] hover:text-[#FF5722] rounded-lg transition-colors font-medium"
                  >
                    <Icon name={item.icon} className="w-4 h-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
 
          {[
            { label: "FAQs", icon: "questionMark" },
            { label: "Contact Us", icon: "contact" },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 p-4 text-[#43474f] hover:bg-gray-50 rounded-xl font-semibold transition-all"
            >
              <Icon name={item.icon} className="w-5 h-5" />
              {item.label}
            </a>
          ))}
        </nav>
        <div className="p-4 mt-2">
          <button className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold py-4 rounded-xl transition-all shadow-md">
            Invest Now
          </button>
        </div>
      </aside>
 
      <main className="pt-20">
        {/* ── HERO — VIDEO BANNER ── */}
        <section className="relative h-[720px] flex items-center overflow-hidden">
          {/* Video background */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCqLn5aXFdH-yeUGTTFnEZFv4AzPscgUoc0aVGqXkHtk8YGn1SW2T1aLZ0eD9yJzN3MBDgunlRfgY0-xF0PpatGQYwM7pTXIvbs3e4dIL2BT3h6bP4HlVy4VzPZER4QL8_vCVC6o08K-ZhEej7wV3MKP5xOrMD3GJUGPRgwQMN3Yj6tnGwfEFWLtOEyn1dRjhWXNT4Fb55Ck5Zrccc7SNDjcmowMtO1QpFfbEUzbmOTEOi7997nkT95QBeHihddzjyn_jPXKZWfbRWT"
          >
            {/* Royalty-free industrial/urban aerial stock video */}
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
 
          {/* Gradient overlay */}
          <div className="video-overlay absolute inset-0 z-[1]" />
 
          {/* Decorative animated accent */}
          <div className="absolute right-0 top-0 w-1/2 h-full z-[2] pointer-events-none overflow-hidden">
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 animate-[spin_25s_linear_infinite_reverse]" />
          </div>
 
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-fadeUp">
                <span className="w-2 h-2 rounded-full bg-[#66dd8b] animate-pulse" />
                Africa's Digital Industrial Frontier
              </div>
 
              <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-6 animate-fadeUp-delay-1">
                Africa's Emerging<br />
                <span className="text-[#FF5722]">Industrial</span> Frontier
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl animate-fadeUp-delay-2">
                Pioneering the future of global trade with state-of-the-art infrastructure, digital governance, and unparalleled logistics connectivity.
              </p>
              <div className="flex flex-wrap gap-4 animate-fadeUp-delay-2">
                <button className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-bold px-10 py-4 rounded-lg shadow-xl transition-all flex items-center gap-3 text-base">
                  Invest Now
                  <Icon name="trendingUp" className="w-5 h-5" />
                </button>
                <button className="border-2 border-white/80 text-white hover:bg-white hover:text-[#001e40] font-bold px-10 py-4 rounded-lg transition-all text-base flex items-center gap-3">
                  View Roadmap
                  <Icon name="arrowRight" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
 
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f9f9f9] to-transparent z-[3]" />
        </section>
 
        {/* ── STATS TICKER ── */}
        <section className="bg-[#001e40] py-5 overflow-hidden">
          <div className="flex gap-16 items-center px-16 flex-wrap justify-center md:justify-start">
            {[
              ["2,400+", "Hectares Planned"],
              ["$1.2B", "Initial Investment"],
              ["40+", "Partner Nations"],
              ["100%", "Renewable Power"],
              ["0%", "Bureaucratic Friction"],
            ].map(([val, label]) => (
              <div key={label} className="flex items-center gap-4 shrink-0">
                <span className="font-display text-2xl font-black text-[#FF5722]">{val}</span>
                <span className="text-white/60 text-sm font-medium uppercase tracking-widest">{label}</span>
                <span className="text-white/20 text-2xl hidden md:block">·</span>
              </div>
            ))}
          </div>
        </section>
 
        {/* ── OVERVIEW ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-7">
                <div>
                  <span className="text-xs font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-3 block">
                    Strategic Vision
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40] leading-tight">
                    Redefining Economic Development
                  </h2>
                </div>
                <p className="text-lg text-[#4A4A4A] leading-relaxed">
                  The Digital Special Economic Zone (DSEZ) serves as a catalyst for sustainable
                  industrialization across the continent. By integrating high-speed digital
                  infrastructure with traditional logistics, we provide a seamless environment for
                  global corporations and local innovators alike.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                  {[
                    ["2.4k+", "Hectares Planned"],
                    ["$1.2B", "Initial Investment"],
                  ].map(([val, label]) => (
                    <div key={label}>
                      <div className="font-display text-4xl font-black text-[#001e40] mb-1">{val}</div>
                      <div className="text-xs font-bold text-[#4A4A4A] uppercase tracking-widest">{label}</div>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-[#001e40] font-bold border-b-2 border-[#001e40] pb-1 hover:text-[#FF5722] hover:border-[#FF5722] transition-all group">
                  Explore Our Vision
                  <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
 
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgkLdFOKJLnI0zcWLoD5zPbvMXuEVK1_Drc_pfLzKdBbqJpCgUcVd-aBIdjD2qseOVzYl8eXZn30DO0vMB93u5TSjY0QuAjs1_soio1EFkad9tsVjqgkwHO-LZs8C7WbN4cWpRXWKntFhxcDJLJhg76-5PXppICvbLgNA_ww_lIODioR1n3r6-7TbwOGcFXcByGN7whX3vFd-hi2fiA7df3uXO0BIyqiaZPVxYnMhBVNFI007zcNFjlsINU1OrzzrAKt1UyT0dPxiD"
                    alt="Control center"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#001e40] p-6 rounded-2xl shadow-2xl hidden md:flex items-center gap-4">
                  <Icon name="analytics" className="w-8 h-8 text-[#66dd8b]" />
                  <div className="text-white">
                    <div className="font-display text-lg font-bold leading-tight">Data-Driven</div>
                    <div className="text-white/70 text-sm">Growth Analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 
        {/* ── BENTO GRID ── */}
        <section className="py-28 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <h3 className="font-display text-3xl font-black text-[#001e40] mb-14 text-center lg:text-left">
              Core Sectors & Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:h-[660px]">
              {/* Big card */}
              <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-[#001e40] rounded-2xl p-10 flex flex-col justify-end bento-card-hover">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN0M1x3egZuOtUSakYZEHQOnaIZjqMSpG8fSjyYDhKgb6vev0dbtxR2XgspKOATvhNLDPMSjRwv66al1u8pRinX_YQjhX9yF6f2HZKRAfW3BPmIbtfmQpPHPZbawPGfrWlxKvJBw8L4C17hm2N9EO9m449ay-ZQYQT8RiG5rjl8gUSJUNTRSWg1hgn7cPQgbpsdt5HEUBya1nT4TzVmk9LlbnpaQ-47DqOn4IDvTZSncnJS6d4FpL6IihxDactyhmDbcckwtizKufz"
                  alt="Manufacturing"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#66dd8b]/20 flex items-center justify-center mb-2">
                    <Icon name="factory" className="w-6 h-6 text-[#66dd8b]" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">Smart Manufacturing</h4>
                  <p className="text-white/80 text-base leading-relaxed">
                    Plug-and-play facilities for high-precision electronics and industrial equipment.
                  </p>
                  <a href="#" className="text-[#66dd8b] font-bold text-sm flex items-center gap-2 mt-2 group/link">
                    Explore Sector
                    <Icon name="arrowRight" className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
 
              {/* Top right */}
              <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm bento-card-hover flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#001e40]/8 flex items-center justify-center">
                      <Icon name="globe" className="w-5 h-5 text-[#001e40]" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-[#001e40]">Logistics & Hubs</h4>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      Integrated dry ports and multi-modal transport networks connecting to global markets.
                    </p>
                  </div>
                  <Icon name="externalLink" className="w-5 h-5 text-gray-300" />
                </div>
              </div>
 
              {/* Bottom left of right col */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm bento-card-hover">
                <div className="w-10 h-10 rounded-xl bg-[#001e40]/8 flex items-center justify-center mb-4">
                  <Icon name="cloud" className="w-5 h-5 text-[#001e40]" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#001e40] mb-2">Digital Services</h4>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">
                  Seamless licensing and financial gateways for modern businesses.
                </p>
              </div>
 
              {/* Bottom right */}
              <div className="bg-[#FF5722] rounded-2xl p-8 bento-card-hover">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon name="bolt" className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-2">Green Energy</h4>
                <p className="text-white/85 text-sm leading-relaxed">
                  100% sustainable power grid for net-zero operations.
                </p>
              </div>
            </div>
          </div>
        </section>
 
        {/* ── NEWS & EVENTS ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-14 gap-4">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-black text-[#001e40]">
                  Latest News & Events
                </h2>
                <p className="text-[#4A4A4A] mt-2 text-base">
                  Stay updated with the latest progress and international partnerships within the zone.
                </p>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 text-[#001e40] font-bold text-sm border-b-2 border-[#001e40] pb-1 hover:text-[#FF5722] hover:border-[#FF5722] transition-all group"
              >
                View All Updates
                <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {newsItems.map((item, i) => (
                <article key={i} className="group news-card cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 border border-gray-100 shadow-sm">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="news-img w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                  <h5 className="font-display text-xl font-bold text-[#001e40] mt-5 mb-3 group-hover:text-[#FF5722] transition-colors leading-snug">
                    {item.title}
                  </h5>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">{item.desc}</p>
                  <time className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    {item.date}
                  </time>
                </article>
              ))}
            </div>
          </div>
        </section>
 
        {/* ── FINAL CTA ── */}
        <section className="bg-[#001e40] py-28 relative overflow-hidden">
          {/* bg decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border border-white/5" />
            <div className="absolute -left-20 bottom-0 w-[300px] h-[300px] rounded-full border border-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-16 text-center relative z-10">
            <span className="text-xs font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-4 block">
              Limited Availability
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8 leading-tight max-w-4xl mx-auto">
              Secure Your Position in the Future of Trade
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-14 max-w-3xl mx-auto leading-relaxed">
              Limited prime industrial plots and commercial blocks are currently available for
              early-stage investors. Leverage exclusive tax incentives and rapid permitting in the
              region's most advanced economic zone.
            </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
              <button className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-bold px-14 py-5 rounded-lg shadow-2xl transition-all flex items-center gap-3 text-lg w-full md:w-auto">
                Invest Now
                <Icon name="trendingUp" className="w-5 h-5" />
              </button>
              <button className="bg-white/10 border border-white/20 text-white font-bold px-14 py-5 rounded-lg hover:bg-white/20 transition-all flex items-center gap-3 text-lg w-full md:w-auto">
                Get Prospectus
                <Icon name="download" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
 
      {/* ── FOOTER ── */}
      <footer className="bg-[#001e40] pt-20 pb-10 px-4 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 text-white">
          {/* Brand */}
          <div className="space-y-6">
            <span className="font-display text-2xl font-black block">
              DS<span className="text-[#FF5722]">EZ</span>
            </span>
            <p className="text-white/70 text-sm leading-relaxed">
              Building the digital backbone for Africa's industrial revolution. Authoritative,
              secure, and globally connected.
            </p>
            <div className="flex gap-3">
              {["share", "globe"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#66dd8b] hover:text-[#001e40] transition-all"
                >
                  <Icon name={icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
 
          {/* Navigation */}
          <div>
            <h6 className="text-xs font-bold mb-8 uppercase tracking-[0.2em] text-white/40">Navigation</h6>
            <nav className="flex flex-col gap-4">
              {["Home", "About Us", "Investment Hub", "Resource Center"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/80 hover:text-[#66dd8b] transition-colors text-sm font-semibold"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
 
          {/* Legal */}
          <div>
            <h6 className="text-xs font-bold mb-8 uppercase tracking-[0.2em] text-white/40">Legal & Governance</h6>
            <nav className="flex flex-col gap-4">
              {["Privacy Policy", "Terms of Service", "Investor Relations", "Compliance"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/80 hover:text-[#66dd8b] transition-colors text-sm font-semibold"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
 
          {/* Newsletter */}
          <div>
            <h6 className="text-xs font-bold mb-8 uppercase tracking-[0.2em] text-white/40">Intelligence</h6>
            <p className="text-white/70 text-sm mb-5 leading-relaxed">
              Get the latest zone updates and market insights delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 w-full text-white placeholder:text-white/40 text-sm focus:border-[#66dd8b] transition-colors"
              />
              <button
                aria-label="Subscribe"
                className="bg-[#66dd8b] text-[#001e40] px-4 py-3 rounded-r-lg font-bold hover:bg-white transition-colors"
              >
                <Icon name="send" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
 
        <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 items-center">
          <span className="text-white/50 text-xs">© 2024 Digital Special Economic Zone. All rights reserved.</span>
          <div className="flex flex-col md:flex-row gap-8">
            <span className="text-white/70 text-xs flex items-center gap-2">
              <Icon name="phone" className="w-4 h-4 text-[#66dd8b]" />
              +254 700 000 000
            </span>
            <span className="text-white/70 text-xs flex items-center gap-2">
              <Icon name="mail" className="w-4 h-4 text-[#66dd8b]" />
              info@dsez.global
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
 