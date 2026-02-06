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
      <>
        {/* Featured Projects */}
      <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto w-full px-4 pb-14">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <p className="text-gray-600 mt-2">
            A few projects that showcase my work across web apps and game development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((p) => (
            <div key={p.title} className="bg-gray-300 p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-center">{p.title}</h3>
              <p className="text-gray-700 text-center">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-sm bg-white/70 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-3 mt-6">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
                >
                  Live
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border border-slate-900 text-slate-900 px-4 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      </>
    );
  };
  
  export default FeaturedProjects;  