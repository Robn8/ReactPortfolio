import { useEffect, useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  // Close menu on resize up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 rounded-xl hover:bg-gray-100 transition"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#top"
            className="flex items-center gap-2 font-semibold tracking-tight text-lg"
            >
                <img
                    src="/favicon-32x32.png"
                    alt=""
                    className="w-6 h-6 object-contain"
                />
                Rob Natale
            </a>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 text-sm">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>

            <a
              href="/res_rn1-1.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="ml-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
            >
              Resume
            </a>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 transition"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>

              <a
                href="/res_rn1-1.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:opacity-90 transition text-center"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;