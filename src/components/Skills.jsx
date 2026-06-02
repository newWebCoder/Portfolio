import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewport } from "../utils/variants";

const Skills = () => {
  return (
    <section id="skills" className="bg-paper-card py-24">
      <div className="mx-auto max-w-content px-8">
        <SectionHeader eyebrow="Toolbelt" title="Skills" />

        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skillGroups.map(({ category, skills }) => (
            <motion.div
              key={category}
              variants={fadeUp}
              className="rounded-xl border border-border bg-paper p-6"
            >
              <p className="mb-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-ink-muted">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-lg border border-border bg-paper-card px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-[#E8C4BA] hover:bg-accent-lt hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;