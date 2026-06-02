import { meta, navLinks } from "../data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-paper-warm px-8 py-8">
      <p className="text-sm text-ink-muted">
        © {year} {meta.name} · Built with React &amp; Tailwind
      </p>

      <nav className="flex flex-wrap gap-6">
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-sm text-ink-muted transition-colors hover:text-accent"
          >
            {label}
          </a>
        ))}
      </nav>

      <p className="text-sm text-ink-muted">{meta.location}</p>
    </footer>
  );
};

export default Footer;