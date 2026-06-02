import { motion } from "framer-motion";
import {
  meta,
  stats,
  pillars,
  stack,
  certifications,
} from "../data/portfolio";
import { fadeUp, fadeIn } from "../utils/variants";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20"
    >
      <div className="mx-auto max-w-content px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_380px]">
          {/* Left */}
          <div>
            {meta.available && (
              <motion.div
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E8C4BA] bg-accent-lt px-4 py-1.5 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-accent"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                {meta.badge}
              </motion.div>
            )}

            <motion.h1
              className="mb-6 text-[clamp(3rem,7vw,5.5rem)] text-ink"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Frontend
              <br />
              <em className="italic text-accent">Developer</em>
            </motion.h1>

            <motion.p
              className="mb-10 max-w-[480px] text-[1.05rem] leading-[1.75] text-ink-soft"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              7+ years building scalable B2B &amp; B2C e-commerce platforms at{" "}
              <strong className="font-medium text-ink">Powerweave</strong> on the Ewiz
              Commerce stack. I turn complex catalogue requirements into clean, reusable UI
              systems focused on{" "}
              <strong className="font-medium text-ink">performance</strong>,{" "}
              <strong className="font-medium text-ink">reusability</strong>, and{" "}
              <strong className="font-medium text-ink">user experience</strong>.
            </motion.p>

            <motion.div
              className="mb-12 flex flex-wrap gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:-translate-y-px hover:bg-accent"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-border bg-transparent px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-px hover:border-ink"
              >
                Get in touch
              </a>
              <a
                href={`mailto:${meta.email}`}
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-border bg-transparent px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-px hover:border-ink"
              >
                Email me
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-8 border-t border-border pt-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-serif text-2xl text-ink">{value}</span>
                  <span className="text-[0.75rem] uppercase tracking-[0.04em] text-ink-muted">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right card — hidden on small screens */}
          <motion.aside
            className="relative hidden rounded-[20px] border border-border bg-paper-card p-8 lg:block"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div
              className="pointer-events-none absolute -right-[60px] -top-[60px] h-[260px] w-[260px] rounded-full opacity-60"
              style={{
                background: "radial-gradient(circle, #F2DDD7 0%, transparent 70%)",
              }}
              aria-hidden
            />

            <p className="mb-1 font-serif text-2xl text-ink">{meta.name}</p>
            <p className="mb-6 text-[0.85rem] text-ink-soft">{meta.headline}</p>

            <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink-muted">
              Focus areas
            </p>
            <ul className="mb-5 flex flex-col gap-2">
              {pillars.map(({ name, desc }) => (
                <li
                  key={name}
                  className="flex w-full items-center  rounded-lg bg-paper-warm px-3 py-2 text-sm"
                >
                  <span className="flex-1 font-medium text-ink">{name}</span>
                  <span className="flex-1 text-xs text-ink-muted">{desc}</span>
                </li>
              ))}
            </ul>

            <hr className="my-5 border-border" />

            <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink-muted">
              Stack
            </p>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {stack.map(({ name, accent }) => (
                <span
                  key={name}
                  className={`rounded-md border px-2.5 py-1 font-mono text-[0.7rem] ${
                    accent
                      ? "border-[#E8C4BA] bg-accent-lt text-accent"
                      : "border-border bg-paper-warm text-ink-soft"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>

            <hr className="my-5 border-border" />

            <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink-muted">
              Certifications
            </p>
            <ul className="flex flex-col gap-2">
              {certifications.map(({ icon, title }) => (
                <li key={title} className="flex items-center gap-2.5 text-[0.825rem] text-ink-soft">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-lt text-sm">
                    {icon}
                  </span>
                  {title}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;