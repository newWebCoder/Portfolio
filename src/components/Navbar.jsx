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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-paper/92 px-8 py-[1.1rem] backdrop-blur-[10px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(26,24,20,0.08)]" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="/" className="nav-logo flex items-center gap-1.5 font-serif text-xl text-ink">
        Home
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

      <a
        href="#contact"
        className="rounded-full bg-ink px-5 py-2 text-[0.8rem] font-medium uppercase tracking-[0.04em] text-paper transition-all hover:-translate-y-px hover:bg-accent"
      >
        Contact
      </a>
    </motion.nav>
  );
};

export default Navbar;