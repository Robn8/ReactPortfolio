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
  
  const FeaturedProjects = () => {
    return (
      <section
        id="projects"
        className="scroll-mt-24 max-w-6xl mx-auto w-full px-4 pb-14"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A few projects that showcase my work across web apps and game development.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((p) => (
            <article
              key={p.title}
              className="
                group relative overflow-hidden rounded-3xl border border-black/10
                bg-gradient-to-b from-white/70 to-white/40 backdrop-blur
                p-6 shadow-sm transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                focus-within:-translate-y-1 focus-within:shadow-xl
              "
            >
              {/* subtle glow / accent */}
              <div
                className="
                  pointer-events-none absolute -top-24 -right-24 h-44 w-44 rounded-full
                  bg-black/5 blur-2xl opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />
  
              {/* title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-center">
                <span className="relative inline-block">
                  {p.title}
                  {/* animated underline */}
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0
                      bg-black/70 transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />
                </span>
              </h3>
  
              {/* description */}
              <p className="text-gray-700 text-center mt-3 leading-relaxed">
                {p.desc}
              </p>
  
              {/* tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="
                      text-sm px-3 py-1 rounded-full
                      bg-black/[0.04] border border-black/10
                      transition-all duration-300
                      group-hover:bg-black/[0.06]
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
  
              {/* buttons */}
              <div className="flex justify-center gap-3 mt-7">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="
                    inline-flex items-center justify-center gap-2
                    bg-slate-900 text-white px-5 py-2.5 rounded-2xl
                    transition-all duration-300
                    hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0
                    focus:outline-none focus:ring-2 focus:ring-slate-900/30
                  "
                >
                  Live
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
  
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="
                    inline-flex items-center justify-center gap-2
                    border border-slate-900 text-slate-900 px-5 py-2.5 rounded-2xl
                    transition-all duration-300
                    hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 active:translate-y-0
                    focus:outline-none focus:ring-2 focus:ring-slate-900/30
                  "
                >
                  Code
                </a>
              </div>
  
              {/* bottom gradient hover */}
              <div
                className="
                  pointer-events-none absolute inset-x-0 bottom-0 h-24
                  bg-gradient-to-t from-black/[0.06] to-transparent
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />
            </article>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedProjects;  