import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutMe from "./AboutMe";
import FeaturedProjects from "./FeaturedProjects";
import Contact from "./Contact";

const slides = [
  {
    src: "/thel2.png",
    title: "Thelonious",
    desc: "A music education app for learners of all ages, built with React Native and Expo to deliver an engaging, accessible mobile experience.",
    code: "https://github.com/Robn8/Thelonious",
    live: "https://apps.apple.com/us/app/thelonious/id6760714389",
    tag: "Mobile App",
    showLive: true,
    showCode: true,
    liveLabel: "View in App Store",
    imageFit: "contain",
  },
  {
    src: "/serf1.png",
    title: "Serfs Shower Doors",
    desc: "Responsive B2B web application built with React, Tailwind CSS, and Node.js.",
    live: "https://serfassociates.com/",
    code: "https://github.com/Robn8/serfs",
    tag: "Business Website",
    showLive: true,
    showCode: true,
    liveLabel: "Live",
    imageFit: "cover",
  },
  {
    src: "/illd.png",
    title: "ILL-DEFINED",
    desc: "A music platform where users can upload and stream tracks using React and AWS.",
    live: "https://ill-defined.com/",
    tag: "Music Platform",
    showLive: true,
    showCode: false,
    liveLabel: "Live",
    imageFit: "cover",
  },
  {
    src: "/p2p.png",
    title: "Promise2Papa",
    desc: "A nonprofit platform helping caregivers and veterans access medical support.",
    live: "https://promise2papa.netlify.app/",
    code: "https://github.com/Robn8/Promise",
    tag: "Nonprofit Platform",
    showLive: true,
    showCode: true,
    liveLabel: "Live Demo",
    imageFit: "cover",
  },
  {
    src: "/bpic.png",
    title: "Breakout",
    desc: "A classic Breakout clone built with Phaser.js and deployed using Netlify.",
    live: "https://game-two.netlify.app/",
    code: "https://github.com/Robn8/Breakout",
    tag: "Browser Game",
    showLive: true,
    showCode: true,
    liveLabel: "Live Demo",
    imageFit: "cover",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  adaptiveHeight: true,
  arrows: false,
};

const Hero = () => {
  return (
    <main>
      <section className="px-4 pt-12 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl">
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-indigo-400/20 blur-3xl" />

            <div className="relative z-10 px-6 py-12 md:px-10 md:py-16">
              <div className="text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Portfolio
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                  Hi, 👋 I’m Rob Natale
                </h1>

                <p className="mt-4 text-lg md:text-xl font-medium text-slate-700">
                  Software Developer | React Enthusiast | Lifelong Learner
                </p>

                <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg leading-8 text-slate-600">
                  I build high quality, user focused software across web, mobile,
                  and interactive experiences, with a strong emphasis on clean UI,
                  thoughtful development, and real world usability.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/Robn8"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-base md:text-lg font-medium text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  GitHub
                </a>

                <a
                  href="/res_robN.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base md:text-lg font-medium text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Resume
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-cyan-600 px-6 py-3 text-base md:text-lg font-medium text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-700"
                >
                  Contact
                </a>
              </div>

              <div className="mt-12">
                <div className="mb-5 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Selected Work
                  </p>
                </div>

                <Slider {...sliderSettings}>
                  {slides.map((s) => (
                    <div key={s.title} className="px-2">
                      <article className="group relative overflow-hidden rounded-3xl shadow-lg">
                        <div
                          className={`relative w-full aspect-[16/9] overflow-hidden ${
                            s.imageFit === "contain"
                              ? "bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(2,6,23,1)_72%)]"
                              : ""
                          }`}
                        >
                          <img
                            src={s.src}
                            alt={`${s.title} screenshot`}
                            className={`w-full h-full transition duration-500 group-hover:scale-[1.02] ${
                              s.imageFit === "contain"
                                ? "object-contain p-4 md:p-6"
                                : "object-cover object-top"
                            }`}
                            loading="lazy"
                          />

                          <div
                            className={`absolute inset-0 ${
                              s.imageFit === "contain"
                                ? "bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent"
                                : "bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
                            }`}
                          />

                          <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

                          <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                            <div className="max-w-2xl">
                              <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                                {s.tag}
                              </span>

                              <h3 className="text-2xl md:text-3xl font-bold text-white">
                                {s.title}
                              </h3>

                              <p className="mt-3 text-sm md:text-base leading-7 text-white/85">
                                {s.desc}
                              </p>

                              <div className="mt-5 flex flex-wrap gap-3">
                                {s.showLive && (
                                  <a
                                    href={s.live}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
                                  >
                                    {s.liveLabel || "Live Demo"}
                                  </a>
                                )}

                                {s.showCode && (
                                  <a
                                    href={s.code}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                                  >
                                    Code
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutMe />
      <FeaturedProjects />
      <Contact />
    </main>
  );
};

export default Hero;