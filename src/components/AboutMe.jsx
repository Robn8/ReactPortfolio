import { useState } from "react";

const AboutMe = () => {
  const [isDark, setIsDark] = useState(true);

  const techStack = [
    "React",
    "JavaScript",
    "React Native",
    "Node.js",
    "Express",
    "MongoDB",
    "AWS",
    "Tailwind CSS",
    "Java",
    "Linux",
  ];

  const highlights = [
    "Full-stack web apps",
    "React Native Mobile",
    "Cloud deployment",
    "Mobile-first UI",
  ];

  const stats = [
    { value: "UI to Cloud", label: "End-to-End Development" },
    { value: "Full Stack", label: "Frontend to Backend" },
    { value: "React", label: "Core Focus" },
  ];

  return (
    <section id="about" className="scroll-mt-24 px-4 py-24">
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
            <div className="mb-10 flex justify-end">
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

            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-center">
              {/* Left column */}
              <div className="flex flex-col items-center text-center">
                <a
                  href="https://www.linkedin.com/in/robert-natale-56785b145/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group"
                >
                  <div className="relative">
                    {isDark ? (
                      <>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 blur-xl opacity-40 group-hover:opacity-70 transition duration-300" />
                        <div className="absolute -inset-2 rounded-full border border-cyan-400/30" />
                      </>
                    ) : (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-400 blur-md opacity-40 group-hover:opacity-60 transition duration-300" />
                    )}

                    <img
                      src="/face1.jpg"
                      alt="Photo of Rob Natale"
                      className={`relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover transition duration-300 group-hover:scale-105 ${
                        isDark
                          ? "border-4 border-slate-900 shadow-2xl"
                          : "border-4 border-white shadow-xl"
                      }`}
                    />
                  </div>
                </a>

                <h2
                  className={`mt-6 text-2xl md:text-3xl font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Rob Natale
                </h2>

                <p
                  className={`mt-2 text-sm md:text-base ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Full-Stack Developer
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isDark
                        ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    Open to opportunities
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isDark
                        ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                        : "bg-cyan-100 text-cyan-800"
                    }`}
                  >
                    React-focused
                  </span>
                </div>

                <a
                  href="https://www.linkedin.com/in/robert-natale-56785b145/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`mt-6 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium shadow-lg transition duration-300 hover:-translate-y-0.5 ${
                    isDark
                      ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 hover:border-cyan-300 hover:bg-cyan-400/20"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Right column */}
              <div>
                <p
                  className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
                    isDark ? "text-cyan-400" : "text-cyan-700"
                  }`}
                >
                  About Me
                </p>

                <h3
                  className={`text-3xl md:text-5xl font-bold leading-tight ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  I build{" "}
                  <span
                    className={
                      isDark
                        ? "bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
                        : "bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent"
                    }
                  >
                    modern, scalable apps
                  </span>{" "}
                  with clean UI and real-world impact.
                </h3>

                <p
                  className={`mt-6 max-w-3xl text-base leading-8 md:text-lg ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  I’m a full-stack developer with a strong focus on React and
                  JavaScript, passionate about building polished, user-friendly
                  applications that solve real problems. I enjoy working across
                  the stack, from crafting intuitive frontend experiences to
                  building backend logic and deploying to the cloud.
                </p>

                <p
                  className={`mt-4 max-w-3xl text-base leading-8 md:text-lg ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  I’ve built projects ranging from interactive browser games to
                  full-stack web platforms with authentication, file uploads,
                  and cloud storage. I’m especially interested in meaningful
                  software, including nonprofit and impact-driven work.
                </p>

                {/* Quick stat row */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`rounded-2xl p-4 text-center shadow-lg transition duration-300 ${
                        isDark
                          ? "border border-slate-800 bg-slate-900/80 backdrop-blur"
                          : "border border-slate-200 bg-white/80"
                      }`}
                    >
                      <p
                        className={`text-xl md:text-2xl font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p
                        className={`mt-1 text-sm ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium shadow-md transition ${
                        isDark
                          ? "border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
                          : "border border-slate-200/70 bg-white/80 text-slate-700 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-800"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mt-10">
                  <h4
                    className={`mb-4 text-lg font-semibold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Tech I Work With
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                          isDark
                            ? "border border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                            : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-800"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;