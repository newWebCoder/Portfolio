import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../data/portfolio";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-paper/90 px-5 py-4 backdrop-blur-xl transition-shadow duration-300 sm:px-8 ${
        scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#hero" aria-label="Vidyashree Muroor home" className="nav-logo flex items-center gap-2 font-sans text-lg font-extrabold tracking-[0.12em] text-accent">
        VM<span className="hidden text-[0.62rem] font-semibold tracking-[0.18em] text-ink-soft sm:inline">PORTFOLIO</span>
      </a>

      <div className="nav-links hidden items-center gap-8 lg:flex">
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-[0.85rem] font-medium uppercase tracking-[0.04em] text-ink-soft transition-colors hover:text-ink"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <a
          href="/Vidyashree_Muroor_Frontend_Developer_CV_6years.pdf"
          download="Vidyashree_Muroor_Frontend_Developer_CV_6years.pdf"
          className="text-[0.8rem] font-medium tracking-wide text-ink-soft transition-colors hover:text-ink"
        >
          Resume ↓
        </a>

        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-2.5 text-[0.8rem] font-semibold tracking-wide text-white transition-all hover:-translate-y-px hover:bg-[#f6121d]"
        >
          Let&apos;s talk
        </a>
      </div>
      <div className="ml-auto flex items-center gap-3 lg:hidden">
        <a
          href="/Vidyashree_Muroor_Frontend_Developer_CV_6years.pdf"
          download="Vidyashree_Muroor_Frontend_Developer_CV_6years.pdf"
          className="text-xs font-medium text-ink-soft transition-colors hover:text-ink"
        >
          Resume ↓
        </a>
        <a href="#contact" aria-label="Go to contact section" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-semibold text-ink">
          VM
        </a>
      </div>
      <div className="absolute left-0 right-0 top-full flex items-center justify-start gap-5 overflow-x-auto border-b border-white/10 bg-paper/95 px-4 py-2.5 backdrop-blur-xl lg:hidden">
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="whitespace-nowrap text-[0.63rem] font-semibold uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-white"
          >
            {label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;