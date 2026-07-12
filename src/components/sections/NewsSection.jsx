import Icon from "../ui/Icon";

const newsItems = [
  {
    tag: "Partnership",
    tagColor: "bg-orange-100 text-[#FF4500]",
    title: "Strategic MoU Signed with Global Logistics Giant",
    desc: "Agreement to develop a 400-acre automated terminal expected to triple export capacity by 2026.",
    date: "October 24, 2024",
    datetime: "2024-10-24",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
  },
  {
    tag: "Growth",
    tagColor: "bg-green-100 text-green-700",
    title: "Phase 1 Infrastructure Completion Report",
    desc: "Official audit confirms all power, water, and fiber-optic networks for the Alpha District are live.",
    date: "October 12, 2024",
    datetime: "2024-10-12",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlxpCrMl4bpiPRW0h9HLylNqQMWDxx49SfJMwZemZP2jEbl_jZwEkn-OZBpgu2iFwzwR-srtMYAcK13aUB4Xs46OhUrz2Vf41BYNWv5D2gkaKhBISWvLY2Ysg-qWYbyoHtFnyuRr2tx0_DDqVgsO3SshW34hmFnckeSVZGMXrex-beYHpXmCrBYWIGEIszCSSbl2uFsY4gX2dDrEfF3g2dcKA6XD8li2xKqczqOHqnIqFjeF6UL7A7Hz0JcXvctxgSgrWkdQPsyCeZ",
  },
  {
    tag: "Event",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Upcoming: Regional Investment Summit 2024",
    desc: "Join world-class investors and policy makers for an exclusive tour of DSEZ facilities next month.",
    date: "September 28, 2024",
    datetime: "2024-09-28",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rmKgH2pe3_wz_q5R75t21k30Uqwbc3B4SMtLNf8Cnt-ZSb4XInvpKr7o6_sypPsSQ6JeNMpb988Ree_5vBQA4WSbgn1_aAZjZUhAQfa_bkKy3Wk3eFosRgtMlkHYrdTpDbBPSkFiKReBzObqs58xycwbaJXatBYmDLs3pz7PoxJDvt1_uGc4D8jzXIwGmEIVC6ABjmGbkYv_NK9YfB0MaDwRkOszvfMTxrX0gC8nFcOkfkl2iw6mMeZi7xZMNc3Z-mnBXAZigTqH",
  },
];

const NewsSection = () => (
  <section className="py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-16">
      {/* Header row */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-14 gap-4">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-black text-[#FF4500]">
            Latest News &amp; Events
          </h2>
          <p className="text-[#4A4A4A] mt-2 text-base">
            Stay updated with the latest progress and international partnerships
            within the zone.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-[#FF4500] font-bold text-sm border-b-2 border-[#FF4500] pb-1 hover:text-[#FF5722] hover:border-[#FF5722] transition-all group"
        >
          View All Updates
          <Icon
            name="arrowRight"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {newsItems.map((item) => (
          <article
            key={item.datetime}
            className="group news-card cursor-pointer"
          >
            {/* Image */}
            <div className="aspect-16/10 overflow-hidden rounded-xl mb-6 border border-gray-100 shadow-sm">
              <img
                src={item.img}
                alt={item.title}
                className="news-img w-full h-full object-cover"
              />
            </div>

            {/* Tag */}
            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${item.tagColor}`}
            >
              {item.tag}
            </span>

            {/* Title */}
            <h5 className="font-display text-xl font-bold text-[#001e40] mt-5 mb-3 group-hover:text-[#FF5722] transition-colors leading-snug">
              {item.title}
            </h5>

            {/* Description */}
            <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
              {item.desc}
            </p>

            {/* Date */}
            <time
              dateTime={item.datetime}
              className="text-xs font-semibold text-gray-400 uppercase tracking-widest"
            >
              {item.date}
            </time>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;
