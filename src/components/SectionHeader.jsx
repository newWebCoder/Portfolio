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
    <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent block mb-3">
      {eyebrow}
    </span>
    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink mb-3">{title}</h2>
    {desc && (
      <p className="text-base text-ink-soft max-w-[460px] leading-relaxed">{desc}</p>
    )}
  </motion.header>
);

export default SectionHeader;