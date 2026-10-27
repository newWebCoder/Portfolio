import { motion } from "framer-motion";
import { meta, stats } from "../data/portfolio";
import { fadeUp, fadeIn } from "../utils/variants";

const Hero = () => (
  <section id="hero" className="hero-spotlight relative flex min-h-[min(900px,100svh)] items-center overflow-hidden pb-16 pt-28 sm:pt-32">
    <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
    <div className="relative mx-auto grid w-full max-w-content items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
      <div className="relative z-10">
        <motion.div
          className="mb-6 flex flex-wrap items-center gap-3"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-flex items-center gap-2 rounded-sm bg-accent px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {meta.badge}
          </span>
          <span className="text-xs font-medium tracking-wide text-ink-soft">
            {meta.location}
          </span>
        </motion.div>

        <motion.h1
          className="mb-5 max-w-[760px] font-sans text-[clamp(3.2rem,8vw,6.6rem)] font-extrabold leading-[0.94] tracking-[-0.06em] text-ink"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          Frontend
          <br />
          <span className="text-accent">Developer</span>
        </motion.h1>

        <motion.div
          className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.13em] text-ink-soft sm:text-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <span className="text-[#46d369]">6+ years experience</span>
          <span aria-hidden="true" className="text-ink-muted">•</span>
          <span>React.js</span>
          <span aria-hidden="true" className="text-ink-muted">•</span>
          <span>JavaScript</span>
        </motion.div>
        <motion.p
          className="mb-8 max-w-[590px] text-base leading-[1.8] text-ink-soft sm:text-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
        >
          {meta.tagline}
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
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#f6121d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span aria-hidden="true">▶</span> Explore my work
          </a>
          <a
            href="#about"
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-sm font-bold text-ink transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            More about me <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-x-9 gap-y-4 border-t border-white/10 pt-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="font-sans text-2xl font-bold tracking-tight text-ink">{value}</span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ink-muted">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.aside
        className="profile-portrait relative mx-auto flex aspect-[4/5] w-[min(72vw,260px)] items-end overflow-hidden rounded-xl border border-white/10 shadow-[0_28px_90px_rgba(0,0,0,0.65)] sm:w-full sm:max-w-[360px]"
        aria-label={`${meta.name} profile`}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <img
          src="/vidyashree_Muroor.PNG"
          alt={`Portrait of ${meta.name}`}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
        />
        <div className="portrait-copy relative z-10 w-full px-6 pb-6 pt-16">
          <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#ff858b]">Meet the developer</p>
          <p className="font-sans text-2xl font-bold text-white">{meta.name}</p>
          <p className="mt-1 text-sm text-white/70">{meta.headline}</p>
        </div>
      </motion.aside>
    </div>
  </section>
);

export default Hero;
