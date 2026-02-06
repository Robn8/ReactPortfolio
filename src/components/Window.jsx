import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutMe from "./AboutMe";
import FeaturedProjects from "./FeaturedProjects";
import Contact from "./Contact";

const slides = [
  {
    src: "/serf1.png",
    title: "Serfs Shower Doors",
    desc: "Responsive B2B web application (React, TailwindCSS, Node.js).",
    live: "https://serfassociates.com/",
    code: "https://github.com/Robn8/serfs",
  },
  {
    src: "/illd.png",
    title: "ILL-DEFINED",
    desc: "Music streaming + uploads (React, AWS).",
    live: "https://ill-defined.com/",
    code: "https://github.com/jdbarrera/ill-defined",
  },
  {
    src: "/p2p.png",
    title: "Promise2Papa",
    desc: "Nonprofit platform helping caregivers & veterans access medical support.",
    live: "https://promise2papa.netlify.app/", 
    code: "https://github.com/Robn8/Promise", 
  }, 
  {
    src: "/bpic.png",
    title: "Breakout",
    desc: "Phaser.js arcade clone deployed on Netlify.",
    live: "https://game-two.netlify.app/",
    code: "https://github.com/Robn8/Breakout", 
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  adaptiveHeight: true,
};

const featuredProjects = [
    {
      title: "Serfs Shower Doors",
      desc: "Responsive B2B website for a glass company, developed with React, Tailwind CSS and Node.js.",
      live: "https://serfassociates.com/",
      code: "https://github.com/Robn8/serfs", 
      tags: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Promise2Papa",
      desc: "A nonprofit platform helping caregivers and veterans access medical support.",
      live: "https://promise2papa.netlify.app/",
      code: "https://github.com/Robn8/Promise", 
      tags: ["React", "Node.js", "Nonprofit"],
    },
    {
      title: "ILL-DEFINED",
      desc: "A music platform where users can upload and stream tracks using React + AWS.",
      live: "https://ill-defined.com/",
      code: "https://github.com/jdbarrera/ill-defined", 
      tags: ["Full Stack", "AWS", "JavaScript"],
    },
    {
      title: "BREAKOUT",
      desc: "A classic Breakout clone built with Phaser.js and deployed using Netlify.",
      live: "https://game-two.netlify.app/",
      code: "https://github.com/Robn8/Breakout", 
      tags: ["Phaser.js", "JavaScript", "Netlify"],
    },
  ];

const Window = () => {
  return (
    <main>
      <div className="flex-1 max-w-4xl mx-auto w-full">
        <Slider {...sliderSettings}>
          {slides.map((s, i) => (
            <div key={i} className="px-2">
              <div className="relative overflow-hidden rounded-2xl shadow-md">
                <img
                  src={s.src}
                  alt={`${s.title} screenshot`}
                  className="w-full aspect-video object-cover object-top"
                  loading="lazy"
                />

                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="text-sm opacity-90">{s.desc}</p>

                    <div className="mt-3 flex gap-3">
                      <a
                        href={s.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
                      >
                        Live Demo
                      </a>
                      <a
                        href={s.code}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="border border-white text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/10 transition"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10 mb-5 px-4">
        <a
          href="https://github.com/Robn8"
          target="_blank"
          rel="noreferrer noopener"
          className="w-full sm:w-auto sm:text-center bg-slate-900 text-white px-6 py-3 rounded-2xl text-lg hover:opacity-90 transition"
        >
          GitHub
        </a>
        <a
          href="/res_rn1-1.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="w-full sm:w-auto border border-slate-900 text-slate-900 px-6 py-3 rounded-2xl text-lg hover:bg-slate-900 hover:text-white transition"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto bg-slate-900 text-white px-6 py-3 rounded-2xl text-lg hover:opacity-90 transition"
        >
          Contact
        </a>

      </div>

      <AboutMe />

      <FeaturedProjects />

      <Contact />

    </main>
  );
};

export default Window;