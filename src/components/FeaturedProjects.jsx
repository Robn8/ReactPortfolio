import { useState } from "react";

const featuredProjects = [
  {
    title: "Thelonious",
    desc: "A music education app for learners of all ages, built with React Native and Expo to deliver an engaging, accessible mobile experience.",
    code: "https://github.com/Robn8/Thelonious",
    tags: ["React Native", "Expo", "JavaScript"],
    featured: true,
    projectType: "Full Stack App",
    showLive: false,
    showCode: true,
  },
  {
    title: "Serfs Shower Doors",
    desc: "Responsive B2B website for a glass company, developed with React, Tailwind CSS, and Node.js.",
    live: "https://serfassociates.com/",
    code: "https://github.com/Robn8/serfs",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    projectType: "Business Website",
    showLive: true,
    showCode: true,
    liveLabel: "Live",
  },
  {
    title: "Promise2Papa",
    desc: "A nonprofit platform helping caregivers and veterans access medical support.",
    live: "https://promise2papa.netlify.app/",
    code: "https://github.com/Robn8/Promise",
    tags: ["React", "Node.js", "Nonprofit"],
    projectType: "Nonprofit Platform",
    showLive: true,
    showCode: true,
    liveLabel: "Live Demo",
  },
  {
    title: "ILL-DEFINED",
    desc: "A music platform where users can upload and stream tracks using React and AWS.",
    live: "https://ill-defined.com/",
    tags: ["Full Stack", "AWS", "JavaScript"],
    projectType: "Music Platform",
    showLive: true,
    showCode: false,
    liveLabel: "Live",
  },
  {
    title: "BREAKOUT",
    desc: "A classic Breakout clone built with Phaser.js and deployed using Netlify.",
    live: "https://game-two.netlify.app/",
    code: "https://github.com/Robn8/Breakout",
    tags: ["Phaser.js", "JavaScript", "Netlify"],
    projectType: "Browser Game",
    showLive: true,
    showCode: true,
    liveLabel: "Live Demo",
  },
];

const FeaturedProjects = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ${
            isDark
              ? "border border-slate-800 bg-slate-950/90"
              : "border border-slate-200 bg-white/80 backdrop-blur-xl"
          }`}
        >
          {/* Background accents */}
          {isDark ? (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_30%)]" />
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </>
          ) : (
            <>
              <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-indigo-400/20 blur-3xl" />
            </>
          )}

          <div className="relative z-10 p-8 md:p-12">
            {/* Top bar */}
            <div className="mb-8 flex justify-end">
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  isDark
                    ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    isDark ? "bg-cyan-400" : "bg-slate-500"
                  }`}
                />
                {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </div>

            {/* Heading */}
            <div className="mb-12 text-center">
              <p
                className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
                  isDark ? "text-cyan-400" : "text-cyan-700"
                }`}
              >
                Featured Work
              </p>

              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Projects that show how I build{" "}
                <span
                  className={
                    isDark
                      ? "bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent"
                  }
                >
                  high quality, user focused software
                </span>
              </h2>

              <p
                className={`mt-4 mx-auto max-w-2xl text-base leading-8 md:text-lg ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                A curated mix of full-stack apps, nonprofit work, business sites,
                and game development projects that reflect both technical range
                and product thinking.
              </p>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {featuredProjects.map((p) => (
                <article
                  key={p.title}
                  className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    p.featured ? "md:col-span-2" : ""
                  } ${
                    isDark
                      ? "border border-slate-800 bg-slate-900/70"
                      : "border border-slate-200 bg-white/80"
                  }`}
                >
                  {/* Hover glow */}
                  <div
                    className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                      isDark ? "bg-cyan-400/15" : "bg-indigo-400/15"
                    }`}
                  />

                  {/* Featured badge */}
                  {p.featured && (
                    <div className="mb-4 flex justify-start">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                          isDark
                            ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                            : "bg-slate-900 text-white"
                        }`}
                      >
                        New / Featured
                      </span>
                    </div>
                  )}

                  <div className={`${p.featured ? "max-w-3xl" : ""}`}>
                    {/* Project type */}
                    <p
                      className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {p.projectType}
                    </p>

                    {/* Title */}
                    <h3
                      className={`text-2xl sm:text-3xl font-bold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      <span className="relative inline-block">
                        {p.title}
                        <span
                          className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                            isDark ? "bg-cyan-400/80" : "bg-slate-900/70"
                          }`}
                        />
                      </span>
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-4 text-base leading-7 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {p.desc}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className={`rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 ${
                            isDark
                              ? "border border-slate-700 bg-slate-950 text-slate-300 group-hover:border-cyan-400/40 group-hover:text-cyan-300"
                              : "border border-slate-200 bg-slate-50 text-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-50 group-hover:text-cyan-800"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap gap-3">
                      {p.showLive && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer noopener"
                          className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                            isDark
                              ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20"
                              : "bg-slate-900 text-white hover:bg-slate-800"
                          }`}
                        >
                          {p.liveLabel || "Live Demo"}
                          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                            →
                          </span>
                        </a>
                      )}

                      {p.showCode && (
                        <a
                          href={p.code}
                          target="_blank"
                          rel="noreferrer noopener"
                          className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                            isDark
                              ? "border border-slate-700 text-slate-200 hover:border-cyan-400/40 hover:bg-slate-800"
                              : "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                          }`}
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom fade */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                      isDark
                        ? "bg-gradient-to-t from-cyan-400/[0.06] to-transparent"
                        : "bg-gradient-to-t from-black/[0.05] to-transparent"
                    }`}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;