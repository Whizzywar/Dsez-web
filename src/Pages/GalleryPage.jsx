
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineXMark,
  HiOutlinePlayCircle,
  HiOutlinePhoto,
  HiOutlineArrowUpRight,
  HiOutlineArrowDown,
} from "react-icons/hi2";

/* ============================================================
   GALLERY DATA
============================================================ */

const items = [
  {
    id: 1,
    type: "photo",
    category: "Infrastructure",
    title: "Aerial View — Zone Master Plan",
    caption:
      "Phase I land parcel at full operational capacity across 1,200 hectares of serviced industrial land.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0HJ02N6S_7UkF452R9ajOu2SoPuMHtCLxAm-ckAycMeZu4MsSDO34gqJGZvNj2e4kTGO4OId80VNWaBJYIrSljEaJnERerlezeV5NvKbmv6D-jJx99JnmZmY2cFbjQtsqexm5xFHOtjPg-Xj-2YdMr_cpIk0wKW9yzIF7RzwuyPmc4eRudwKLgwx3Coz3rbRZj7H99zSQqPZqyTuFoMqR1LOl7fMYiiy86aA34lXozdkgF7_CPsQzEWZ9en76wehEwNfjzkF5Lov",
  },
  {
    id: 2,
    type: "photo",
    category: "Operations",
    title: "Berth 7 — Maritime Gateway",
    caption:
      "12,000 TEU/month capacity. The highest-throughput inland digital port in the subregion.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rmKgH2pe3_wz_q5R75t21k30Uqwbc3B4SMtLNf8Cnt-ZSb4XInvpKr7o6_sypPsSQ6JeNMpb988Ree_5vBQA4WSbgn1_aAZjZUhAQfa_bkKy3Wk3eFosRgtMlkHYrdTpDbBPSkFiKReBzObqs58xycwbaJXatBYmDLs3pz7PoxJDvt1_uGc4D8jzXIwGmEIVC6ABjmGbkYv_NK9YfB0MaDwRkOszvfMTxrX0gC8nFcOkfkl2iw6mMeZi7xZMNc3Z-mnBXAZigTqH",
  },
  {
    id: 3,
    type: "photo",
    category: "Events",
    title: "Investment Summit 2026",
    caption:
      "320 delegates from 42 nations attended DSEZ's flagship annual summit resulting in 17 letters of intent.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlxpCrMl4bpiPRW0h9HLylNqQMWDxx49SfJMwZemZP2jEbl_jZwEkn-OZBpgu2iFwzwR-srtMYAcK13aUB4Xs46OhUrz2Vf41BYNWv5D2gkaKhBISWvLY2Ysg-qWYbyoHtFnyuRr2tx0_DqVgsO3SshW34hmFnckeSVZGMXrex-beYHpXmCrBYWIGEIszCSSbl2uFsY4gX2dDrEfF3g2dcKA6XD8li2xKqczqOHqnIqFjeF6UL7A7Hz0JcXvctxgSgrWkdQPsyCeZ",
  },
  {
    id: 4,
    type: "photo",
    category: "Infrastructure",
    title: "Central Authority Centre",
    caption:
      "DSEZ Headquarters — 400 Innovation Drive, Financial District. The zone's administrative nerve centre.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBgWZVO94131r5JY3tpSsAuS9O_WklwMkptYDBWzal-BC3E4ZoyUasOjxSUCQE-9HkhTbnq7Y9PZJy8Tr_tQHkcc5XeY1omoRQLH_sKbACbGz3sjncTKAxRKHY9eWNx5gx6kgbayux9a9ua6q-ip8S2P5suSSR47OvYIf6IgJCye_d0xPFLsjGON8yETUKdN4NrhVzgBQR8yLQfBaHiYc6ZGsxUNGIvDXvKvJStFlMNopx9LBZMXUVpzhkzY9TtlHsBXMha2nCblqS",
  },
  {
    id: 5,
    type: "photo",
    category: "Manufacturing",
    title: "Factory Shell — Type A",
    caption:
      "Ready-to-occupy 5,000 sqm industrial factory shell available for immediate operator setup.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5bsZBcipXkW9QL-RWdAKlDXmDjLGJkcBj7gyGpR4HobtijtMBI9PJkHZXC_y1i_2qQpZLG03EYEFmnpMPZT4pZMfKJ5vwSfjkriN3_cXHWecWkTvVnA0kKMnwwaQzohL7nC3zr0HbMO4q9T4mYi76ut8ZeQbDJfchwHgex-2I83UkeFPKmU0bkR81DQbhzlpiOKnMcJ0jfiwdsRO-EIkjs8EV4iNITNw-7WhMHYmh_RodgFZHqeSw0CLYa0fwxzpXxm6Mv90Ea0qS",
  },
  {
    id: 6,
    type: "photo",
    category: "Operations",
    title: "Smart Grid Control Room",
    caption:
      "AI-driven Phase II energy grid delivering 99.9% uptime and cutting operator energy costs by 22%.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
  },
  {
    id: 7,
    type: "photo",
    category: "Events",
    title: "AfDB Partnership Signing",
    caption:
      "The $220M AfDB co-financing agreement for Phase III infrastructure development — roads, water, and broadband.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhruhFdWA4dZdtwy21d3iI6lFKovTgwPze0C_dvQspRPJ84aGmgy824Ly7beIKJhqDCUQRfj1SQPhJ2H06AbBzva01iJgiA-0rM2g-kQl4oRzgjptmCKj63cmKXg63__ziQTVSYjZsPseZKH9Ew6fXvXrYjSMqJBJjd0wdShMArIUxl9GhekJqjuMzrJKLOAE6Ht2DjUue9qiJn8MhBKzuWRHA-FDn80-bmzqHyU4HEiMXL3rHtqmyhvByP7csta3zGlnHw9bALZF",
  },
  {
    id: 8,
    type: "photo",
    category: "Infrastructure",
    title: "Zone Boundary — Phase I",
    caption:
      "1,200 hectares of fully serviced industrial land ready for immediate occupation by international operators.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNrRV7BzY8qVscTLGrJUR57sufDr_YUUh9Q6T8aLYYPqObvQs2z3BTMrzGBYDV7T6vdy07n8FQI8Qu07pxHv6Un6k_v1rQrhqua7Sz_VnFih2_EX1XNMGqgjGgIMyypbLaT0NWTU_P8pfc9_dS8wdD_J8-TWUt7-3Z3C_zaxTm89gD4XFcYdeGy8CkyHJvThl2euIB3u6HGMvVFAgLGVpbwjus_OvOQHeYTvZ4dTJ1mr2JPbhB4w_XQ172iMzGlqa7z8OaEinYjVi",
  },
  {
    id: 9,
    type: "photo",
    category: "Operations",
    title: "Digital Customs Portal",
    caption:
      "DSEZ-ONE single-window portal reducing average customs clearance time to under 4 hours.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Qi2sHfPHAm1Aac7yQKuR7Yks0QZ3KGf-UlMAMhgbtap-_oMdXXVYZXrA6PC_TqCgzo1iNWN0-s5M4QhLH9e3cxKVrJFN8i_kJ7FP4NQaTHlJHAqWl9S0Y5c2YV1vLAnS0n8UMbLHh0ggN1uTwC4Y8_nxcNiGFKBzAW3-hx8FdKhYGRj8E7fIbgETLCUKIh_2l9mVADXSf5B6Kc6I-t7gQNxvGEHMqPqBw8F08YR3xfXk2uCxkzxYiNf76pWy39gCQyVQfh7o",
  },
  {
    id: 10,
    type: "video",
    category: "Zone Overview",
    title: "DSEZ — Africa's Industrial Frontier",
    caption:
      "Official zone overview: world-class infrastructure, investor incentives, and the AfCFTA opportunity.",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfCWZtkbi3hu_TSrrxOAXSNeTWT1b2_wfhTBuG4Rm1TQ71eFv7X7m1k8bDAmJEW6ibqgIhQHIcGv1nynAswrSl4M7-4_pXpJuLrThdZffvwbbhzthQkMQpRxaxTL5YtqflstyE5NdCwlHUatZmwuGaUp_lNLpkb2vCElKiu9o5G3pJIGwGOnjshuCmWGq2tIQ1jHRJpDq87ETIsUN051K9TjSgbNfBc4HsfBzYtH4YHTN7vfr-KFcLoH9f4teRtV05vh6QR5xUITQZ",
    videoUrl:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "3:42",
  },
  {
    id: 11,
    type: "video",
    category: "Infrastructure",
    title: "Berth 7 — Port Integration Timelapse",
    caption:
      "From groundbreaking to commissioning — the complete construction journey of Berth 7.",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rmKgH2pe3_wz_q5R75t21k30Uqwbc3B4SMtLNf8Cnt-ZSb4XInvpKr7o6_sypPsSQ6JeNMpb988Ree_5vBQA4WSbgn1_aAZjZUhAQfa_bkKy3Wk3eFosRgtMlkHYrdTpDbBPSkFiKReBzObqs58xycwbaJXatBYmDLs3pz7PoxJDvt1_uGc4D8jzXIwGmEIVC6ABjmGbkYv_NK9YfB0MaDwRkOszvfMTxrX0gC8nFcOkfkl2iw6mMeZi7xZMNc3Z-mnBXAZigTqH",
    videoUrl:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "2:18",
  },
  {
    id: 12,
    type: "video",
    category: "Events",
    title: "Regional Investment Summit 2026 — Highlights",
    caption:
      "Key moments, keynote addresses, and signing ceremonies from the DSEZ flagship investment conference.",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlxpCrMl4bpiPRW0h9HLylNqQMWDxx49SfJMwZemZP2jEbl_jZwEkn-OZBpgu2iFwzwR-srtMYAcK13aUB4Xs46OhUrz2Vf41BYNWv5D2gkaKhBISWvLY2Ysg-qWYbyoHtFnyuRr2tx0_DqVgsO3SshW34hmFnckeSVZGMXrex-beYHpXmCrBYWIGEIszCSSbl2uFsY4gX2dDrEfF3g2dcKA6XD8li2xKqczqOHqnIqFjeF6UL7A7Hz0JcXvctxgSgrWkdQPsyZ",
    videoUrl:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "5:07",
  },
];

/* ============================================================
   LIGHTBOX
============================================================ */

const Lightbox = ({
  item,
  onClose,
  onPrev,
  onNext,
  index,
  total,
}) => {
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
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
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
          <span
            className="
              mb-2 block
              text-[10px]
              font-bold uppercase
              tracking-[0.25em]
              text-[#ff5722]
            "
          >
            {item.category}
          </span>

          <h3 className="text-xl font-black text-white sm:text-2xl">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-white/55">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   GALLERY CARD
============================================================ */

const GalleryCard = ({
  item,
  onClick,
  featured = false,
}) => {
  const isVideo = item.type === "video";
  const src = isVideo ? item.thumb : item.img;

  return (
    <article
      onClick={() => onClick(item)}
      className="
        group cursor-pointer
        overflow-hidden
        rounded-[1.5rem]
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

        <span
          className={`
            absolute left-4 top-4
            rounded-full
            px-3 py-1.5
            text-[9px]
            font-bold uppercase
            tracking-[0.18em]
            backdrop-blur-md
            ${
              isVideo
                ? "bg-[#ff5722] text-white"
                : "bg-[#001e40]/80 text-white"
            }
          `}
        >
          {isVideo
            ? `▶ ${item.category}`
            : item.category}
        </span>

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

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-[#4a4a4a]
          "
        >
          {item.caption}
        </p>

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

/* ============================================================
   HERO
============================================================ */

const Hero = ({
  photoCount,
  videoCount,
}) => {
  return (
    <section
      className="
        relative -mt-20
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
            See the vision. Experience the development.
            Discover the opportunity. Our gallery captures
            the energy of a destination built for investment,
            innovation, and sustainable economic development.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-white/55">
              <HiOutlinePhoto className="h-4 w-4" />

              <span>
                <strong className="text-white">
                  {photoCount}
                </strong>{" "}
                Photos
              </span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-2 text-sm text-white/55">
              <HiOutlinePlayCircle className="h-4 w-4" />

              <span>
                <strong className="text-white">
                  {videoCount}
                </strong>{" "}
                Videos
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

/* ============================================================
   INTRO
============================================================ */

const GalleryIntro = () => {
  return (
    <section
      className="
        bg-[#f2f2f2]
        px-5 py-20
        sm:px-10
        md:px-16
        lg:py-28
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
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-slate-400" />

            <span
              className="
                text-[10px]
                font-bold uppercase
                tracking-[0.3em]
                text-slate-400
              "
            >
              A closer look
            </span>
          </div>

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
            <span className="text-slate-400">
              investment, innovation
            </span>{" "}
            and sustainable growth.
          </h2>

          <p
            className="
              mt-7 max-w-3xl
              text-base leading-8
              text-slate-500
            "
          >
            Explore the places, infrastructure, people and
            opportunities shaping our Free Zone. From expansive
            industrial developments and modern facilities to
            logistics infrastructure and thriving businesses,
            every image tells part of our story.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   FILTER BAR
   CENTERED
   ONLY PHOTOS + VIDEOS
   NO BORDER
   NO STICKY
============================================================ */

const FilterBar = ({
  typeFilter,
  setTypeFilter,
}) => {
  return (
    <div
      className="
        mb-12
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

/* ============================================================
   GALLERY SECTION
============================================================ */

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
        px-4 py-16
        sm:px-8
        md:px-16
        lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* FILTER IS CENTERED HERE */}

        <FilterBar
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
        />

        {/* EXPLORE ZONE */}

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

          <p
            className="
              max-w-md
              text-sm leading-7
              text-slate-500
            "
          >
            A visual journey through our infrastructure,
            businesses, development, events and community.
          </p>
        </div>

        {/* GALLERY */}

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
              There are currently no{" "}
              {typeFilter.toLowerCase()} available
              in the gallery.
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

/* ============================================================
   CTA
============================================================ */

const CTA = () => {
  return (
    <section
      className="
        bg-white
        px-6 py-24
        sm:px-10
        md:px-16
        lg:py-32
      "
    >
      <div
        className="
          mx-auto max-w-7xl
          flex flex-col gap-12
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
              Discover more
            </span>
          </div>

          <h2
            className="
              mt-5 max-w-3xl
              text-4xl font-black
              leading-tight
              tracking-[-0.04em]
              text-[#001e40]
              sm:text-5xl
              lg:text-6xl
            "
          >
            See the Free Zone{" "}
            <span className="text-slate-400">
              in motion.
            </span>
          </h2>

          <p
            className="
              mt-6 max-w-xl
              text-base leading-7
              text-slate-500
            "
          >
            Discover the environment, infrastructure and
            opportunities that make DSEZ a destination for
            businesses ready to grow.
          </p>
        </div>

        <a
          href="#gallery"
          className="
            group
            flex w-fit
            items-center gap-4
            rounded-full
            bg-[#001e40]
            px-7 py-4
            text-sm font-bold
            text-white
            transition-all
            duration-300
            hover:bg-[#ff5722]
          "
        >
          Explore Gallery

          <HiOutlineArrowUpRight
            className="
              h-5 w-5
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>
      </div>
    </section>
  );
};


/* ============================================================
   MAIN GALLERY PAGE
============================================================ */

export default function GalleryPage() {
  const [typeFilter, setTypeFilter] =
    useState("Photos");

  const [lightboxIndex, setLightboxIndex] =
    useState(null);

  /* ----------------------------------------------------------
     FILTER ITEMS
  ---------------------------------------------------------- */

  const filtered = items.filter((item) => {
    if (typeFilter === "Photos") {
      return item.type === "photo";
    }

    if (typeFilter === "Videos") {
      return item.type === "video";
    }

    return true;
  });

  /* ----------------------------------------------------------
     OPEN LIGHTBOX
  ---------------------------------------------------------- */

  const openLightbox = useCallback(
    (item) => {
      const index = filtered.findIndex(
        (galleryItem) =>
          galleryItem.id === item.id
      );

      setLightboxIndex(index);
    },
    [filtered]
  );

  /* ----------------------------------------------------------
     CLOSE LIGHTBOX
  ---------------------------------------------------------- */

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  /* ----------------------------------------------------------
     PREVIOUS
  ---------------------------------------------------------- */

  const previousItem = useCallback(() => {
    setLightboxIndex((currentIndex) => {
      if (
        currentIndex === null ||
        filtered.length === 0
      ) {
        return currentIndex;
      }

      return (
        (currentIndex - 1 + filtered.length) %
        filtered.length
      );
    });
  }, [filtered.length]);

  /* ----------------------------------------------------------
     NEXT
  ---------------------------------------------------------- */

  const nextItem = useCallback(() => {
    setLightboxIndex((currentIndex) => {
      if (
        currentIndex === null ||
        filtered.length === 0
      ) {
        return currentIndex;
      }

      return (
        (currentIndex + 1) %
        filtered.length
      );
    });
  }, [filtered.length]);

  /* ----------------------------------------------------------
     COUNTS
  ---------------------------------------------------------- */

  const photoCount = items.filter(
    (item) => item.type === "photo"
  ).length;

  const videoCount = items.filter(
    (item) => item.type === "video"
  ).length;

  /* ----------------------------------------------------------
     RENDER
  ---------------------------------------------------------- */

  return (
    <div
      className="
        min-h-screen
        bg-[#f2f2f2]
        text-[#001e40]
      "
    >
      <Hero
        photoCount={photoCount}
        videoCount={videoCount}
      />

      <GalleryIntro />

      <GallerySection
        filtered={filtered}
        openLightbox={openLightbox}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      <CTA />

     

      {lightboxIndex !== null &&
        filtered[lightboxIndex] && (
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
