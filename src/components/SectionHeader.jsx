import { motion } from "framer-motion";
import { fadeUp, viewport } from "../utils/variants";

const SectionHeader = ({ eyebrow, title, desc, className = "" }) => (
  <motion.header
    className={`mb-14 ${className}`}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
  >
    <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
      {eyebrow}
    </span>
    <h2 className="mb-3 font-sans text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink">{title}</h2>
    {desc && (
      <p className="text-base text-ink-soft max-w-[460px] leading-relaxed">{desc}</p>
    )}
  </motion.header>
);

export default SectionHeader;