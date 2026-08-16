import { useState, useEffect, useCallback } from "react";
import { sanityClient, GALLERY_QUERY } from "../lib/sanity";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineXMark,
  HiOutlinePlayCircle,
  HiOutlinePhoto,
  HiOutlineArrowUpRight,
  HiOutlineArrowDown,
} from "react-icons/hi2";

/* LIGHTBOX */

const Lightbox = ({ item, onClose, onPrev, onNext, index, total }) => {
  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyboard);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/95
        p-4
        backdrop-blur-xl
      "
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="
          absolute right-5 top-5 z-20
          flex h-11 w-11
          items-center justify-center
          rounded-full
          bg-white/10
          text-white
          backdrop-blur-md
          transition
          hover:bg-white
          hover:text-slate-900
        "
      >
        <HiOutlineXMark className="h-5 w-5" />
      </button>

      <div
        className="
          absolute left-1/2 top-6
          -translate-x-1/2
          text-xs font-bold
          tracking-[0.25em]
          text-white/40
        "
      >
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="Previous item"
        className="
          absolute left-3 sm:left-7
          top-1/2 z-20
          flex h-12 w-12
          -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-white/10
          text-white
          backdrop-blur-md
          transition
          hover:bg-white
          hover:text-slate-900
        "
      >
        <HiOutlineArrowLeft className="h-5 w-5" />
      </button>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next item"
        className="
          absolute right-3 sm:right-7
          top-1/2 z-20
          flex h-12 w-12
          -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-white/10
          text-white
          backdrop-blur-md
          transition
          hover:bg-white
          hover:text-slate-900
        "
      >
        <HiOutlineArrowRight className="h-5 w-5" />
      </button>

      <div
        className="
          flex w-full max-w-6xl
          flex-col items-center
          gap-6 px-12
        "
        onClick={(event) => event.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.videoUrl}
            controls
            autoPlay
            className="
              max-h-[65vh]
              w-full
              rounded-2xl
              bg-black
              object-contain
              shadow-2xl
            "
          />
        ) : (
          <img
            src={item.img}
            alt={item.title}
            className="
              max-h-[65vh]
              w-full
              rounded-2xl
              object-contain
              shadow-2xl
            "
          />
        )}

        <div className="max-w-2xl px-4 text-center">
          <h3 className="text-xl font-black text-white sm:text-2xl">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

/*GALLERY CARD */

const GalleryCard = ({ item, onClick, featured = false }) => {
  const isVideo = item.type === "video";
  const src = isVideo ? item.thumb : item.img;

  return (
    <article
      onClick={() => onClick(item)}
      className="
        group cursor-pointer
        overflow-hidden
        rounded-xs
        
        bg-white
        shadow-sm
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <div
        className="
          relative overflow-hidden
          bg-slate-200
        "
        style={{
          aspectRatio: featured ? "16/11" : "16/10",
        }}
      >
        <img
          src={src}
          alt={item.title}
          loading="lazy"
          className="
            h-full w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/65
            via-black/5
            to-transparent
          "
        />

        {isVideo && (
          <>
            <div
              className="
                absolute inset-0
                flex items-center justify-center
              "
            >
              <div
                className="
                  flex h-16 w-16
                  items-center justify-center
                  rounded-full
                  bg-white/20
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-[#ff5722]
                "
              >
                <HiOutlinePlayCircle className="h-8 w-8" />
              </div>
            </div>

            <span
              className="
                absolute bottom-4 right-4
                rounded-md
                bg-black/70
                px-2.5 py-1
                text-[10px]
                font-bold text-white
              "
            >
              {item.duration}
            </span>
          </>
        )}

        <div
          className="
            absolute right-4 top-4
            flex h-10 w-10
            items-center justify-center
            rounded-full
            bg-white/10
            text-white
            opacity-0
            backdrop-blur-md
            transition
            group-hover:opacity-100
          "
        >
          <HiOutlineArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="px-5 py-5">
        <div
          className="
            text-[9px]
            font-bold uppercase
            tracking-[0.25em]
            text-slate-300
          "
        >
          {String(item.id).padStart(2, "0")}
        </div>

        <h3
          className="
            mt-2
            text-base font-black
            leading-snug
            tracking-tight
            text-[#001e40]
            transition-colors
            group-hover:text-[#ff5722]
          "
        >
          {item.title}
        </h3>

        <div
          className="
            mt-4
            flex items-center gap-2
            text-[10px]
            font-bold uppercase
            tracking-[0.18em]
            text-slate-400
            transition
            group-hover:text-[#ff5722]
          "
        >
          View {isVideo ? "video" : "image"}
          <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </article>
  );
};

/*HERO */

const Hero = ({ photoCount, videoCount }) => {
  return (
    <section
      className="
        relative -mt-30
        h-[70vh]
        min-h-[580px]
        max-h-[780px]
        overflow-hidden
        bg-[#001e40]
      "
    >
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQiHThBhrofGhpCVxoqDUO1JcBOqhkhda1aTzu-OMF8oDKLf6yb6BUbyd_PANOIi5Y0LushuKJXsBAhTGjRmVw07ZbgHJsnrhhXGwcRDWivLsbJm3sny1UWlEvhAeXC-mcKe90hpyWGPBVQNQf83RUl1mPjMnQskH91gVnQiyOUrEaEPQw26gzmucqRf03SD4oYocGjAVt5-zdmYswsrhTFrFUkng_jkLqGhDlVQ61N2AO4Hh9cb0W2l60RbAVs5XgMDyQ_UW1glZU"
        alt="DSEZ Free Zone"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform
          duration-[2000ms]
          hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-black/35" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/10
          via-black/25
          to-black/90
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/45
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          absolute bottom-0 left-0
          w-full
          px-5 pb-12 pt-24
          sm:px-10
          md:px-16
          lg:pb-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#66dd8b]" />

            <span
              className="
                text-[10px]
                font-bold uppercase
                tracking-[0.3em]
                text-[#66dd8b]
              "
            >
              Visual Archive
            </span>
          </div>

          <h1
            className="
              mb-5
              text-6xl font-black
              leading-[0.9]
              tracking-[-0.05em]
              text-white
              sm:text-7xl
              md:text-8xl
              lg:text-[9rem]
            "
          >
            Gallery
          </h1>

          <p
            className="
              mb-7 max-w-2xl
              text-base leading-7
              text-white/70
              sm:text-lg
              sm:leading-8
            "
          >
            See the vision. Experience the development. Discover the
            opportunity. Our gallery captures the energy of a destination built
            for investment, innovation, and sustainable economic development.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-white/55">
              <HiOutlinePhoto className="h-4 w-4" />

              <span>
                <strong className="text-white">{photoCount}</strong> Photos
              </span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-2 text-sm text-white/55">
              <HiOutlinePlayCircle className="h-4 w-4" />

              <span>
                <strong className="text-white">{videoCount}</strong> Videos
              </span>
            </div>

            <a
              href="#gallery"
              className="
                ml-2 hidden
                items-center gap-2
                text-xs font-bold uppercase
                tracking-[0.18em]
                text-white
                sm:flex
              "
            >
              Explore
              <HiOutlineArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* INTRO */

const GalleryIntro = () => {
  return (
    <section
      className="
        bg-[#f2f2f2]
        px-11 py-10
        sm:px-10
        md:px-15
        lg:py-20
      "
    >
      <div
        className="
          mx-auto max-w-7xl
          grid gap-12
          lg:grid-cols-[0.65fr_1.35fr]
          lg:items-end
        "
      >
        <div>
          <div
            className="
              mt-10
              text-xs font-semibold
              uppercase
              tracking-[0.2em]
              text-slate-300
            "
          >
            DSEZ / Visual Archive
          </div>
        </div>

        <div>
          <h2
            className="
              max-w-4xl
              text-4xl font-medium
              leading-[1.08]
              tracking-[-0.04em]
              text-[#001e40]
              sm:text-5xl
              lg:text-6xl
            "
          >
            A destination built for{" "}
            <span className="text-slate-400">investment, innovation</span> and
            sustainable growth.
          </h2>

          <p
            className="
              mt-5 max-w-3xl
              text-base leading-8
              t
              ext-slate-500
            "
          >
            Explore the places, infrastructure, people and opportunities shaping
            our Free Zone. From expansive industrial developments and modern
            facilities to logistics infrastructure and thriving businesses,
            every image tells part of our story.
          </p>
        </div>
      </div>
    </section>
  );
};

/* FILTER BAR */

const FilterBar = ({ typeFilter, setTypeFilter }) => {
  return (
    <div
      className="
        mb-7
        flex w-full
        items-center
        justify-center
      "
    >
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
        "
      >
        <button
          type="button"
          onClick={() => setTypeFilter("Photos")}
          className={`
            rounded-full
            border-0
            px-8 py-3
            text-xs
            font-bold
            outline-none
            transition-all
            duration-300
            ${
              typeFilter === "Photos"
                ? "bg-[#001e40] text-white shadow-md"
                : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-[#001e40]"
            }
          `}
        >
          Photos
        </button>

        <button
          type="button"
          onClick={() => setTypeFilter("Videos")}
          className={`
            rounded-full
            border-0
            px-8 py-3
            text-xs
            font-bold
            outline-none
            transition-all
            duration-300
            ${
              typeFilter === "Videos"
                ? "bg-[#001e40] text-white shadow-md"
                : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-[#001e40]"
            }
          `}
        >
          Videos
        </button>
      </div>
    </div>
  );
};

/* GALLERY SECTION */

const GallerySection = ({
  filtered,
  openLightbox,
  typeFilter,
  setTypeFilter,
}) => {
  return (
    <main
      id="gallery"
      className="
        bg-[#f2f2f2]
        px-4 py-10
        sm:px-5
        md:px-10
        lg:py-5
      "
    >
      <div className="mx-auto max-w-7xl">
        <FilterBar typeFilter={typeFilter} setTypeFilter={setTypeFilter} />

        <div
          className="
            mb-10
            flex flex-col gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#ff5722]" />

              <span
                className="
                  text-[10px]
                  font-bold uppercase
                  tracking-[0.3em]
                  text-[#ff5722]
                "
              >
                Featured moments
              </span>
            </div>

            <h2
              className="
                mt-4
                text-4xl font-black
                tracking-[-0.04em]
                text-[#001e40]
                sm:text-5xl
              "
            >
              Explore the Zone
            </h2>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div
            className="
              flex flex-col
              items-center
              justify-center
              rounded-3xl
              bg-white
              px-6 py-32
              text-center
              shadow-sm
            "
          >
            <HiOutlinePhoto
              className="
                mb-5 h-10 w-10
                text-slate-300
              "
            />

            <h3
              className="
                text-xl font-black
                text-[#001e40]
              "
            >
              No items available
            </h3>

            <p
              className="
                mt-2 max-w-sm
                text-sm leading-6
                text-slate-400
              "
            >
              There are currently no {typeFilter.toLowerCase()} available in the
              gallery.
            </p>
          </div>
        ) : (
          <div
            className="
              grid grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filtered.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={openLightbox}
                featured={index === 0}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

/* MAIN GALLERY PAGE */

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [typeFilter, setTypeFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(GALLERY_QUERY)
      .then((data) => {
        setItems(data.map((item, i) => ({ ...item, id: i + 1 })));
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load gallery.");
        setLoading(false);
      });
  }, []);

  const filtered = items.filter(
    (item) =>
      typeFilter === "All" ||
      (typeFilter === "Photos" && item.type === "photo") ||
      (typeFilter === "Videos" && item.type === "video"),
  );

  const openLightbox = useCallback(
    (item) => {
      setLightboxIndex(filtered.findIndex((i) => i.id === item.id));
    },
    [filtered],
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const previousItem = useCallback(
    () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length],
  );
  const nextItem = useCallback(
    () => setLightboxIndex((i) => (i + 1) % filtered.length),
    [filtered.length],
  );

  const photoCount = items.filter((i) => i.type === "photo").length;
  const videoCount = items.filter((i) => i.type === "video").length;

  if (loading)
    return (
      <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-10 h-10 border-2 border-[#001e40]
                        border-t-transparent rounded-full animate-spin"
          />
          <p className="text-sm text-gray-400 font-medium">
            Loading gallery...
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-xl font-black text-[#001e40] mb-2">
            Could not load gallery
          </p>
          <p className="text-sm text-gray-400">{error}</p>
        </div>
      </div>
    );

  return (
    <div
      className="
        min-h-screen
        bg-[#f2f2f2]
        text-[#001e40]
      "
    >
      <Hero photoCount={photoCount} videoCount={videoCount} />

      <GalleryIntro />

      <GallerySection
        filtered={filtered}
        openLightbox={openLightbox}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <Lightbox
          item={filtered[lightboxIndex]}
          index={lightboxIndex}
          total={filtered.length}
          onClose={closeLightbox}
          onPrev={previousItem}
          onNext={nextItem}
        />
      )}
    </div>
  );
}
