import Icon from "../ui/Icon";
import { newsItems } from "../../data/siteData";

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
