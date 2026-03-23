const Header = () => {
    return (
      <header className="px-4 pt-12 pb-8">
        <section className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl">
          {/* Background accents */}
          <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />
  
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Portfolio
            </p>
  
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              Hi, 👋 I’m Rob Natale
            </h1>
  
            <p className="mt-4 text-lg md:text-xl text-slate-700 font-medium">
              Software Developer | React Enthusiast | Lifelong Learner
            </p>
  
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-slate-600">
              I build high quality, user focused software across web, mobile, and
              interactive experiences, with a strong emphasis on clean UI,
              thoughtful development, and real-world usability.
            </p>
          </div>
        </section>
      </header>
    );
  };
  
  export default Header;