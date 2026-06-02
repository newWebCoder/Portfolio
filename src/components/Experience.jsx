import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewport } from "../utils/variants";

const Experience = () => {
  return (
    <section id="experience" className="bg-paper py-24">
      <div className="mx-auto max-w-content px-8">
        <SectionHeader
          eyebrow="Work history"
          title="Experience"
          desc="4+ years at the same company — growing from associate to leading UI on enterprise platforms."
        />

        <motion.div
          className="flex flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {experiences.map(({ role, company, period, location, bullets }) => (
            <motion.article
              key={role + period}
              variants={fadeUp}
              className="grid gap-4 border-b border-border py-10 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-8"
            >
              <div className="pt-1">
                <p className="mb-1.5 font-mono text-xs tracking-wide text-ink-muted">
                  {period}
                </p>
                <p className="mb-1 text-sm font-medium text-accent">{company}</p>
                <p className="text-xs text-ink-muted">{location}</p>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-[1.4rem] leading-tight text-ink">
                  {role}
                </h3>
                <ul className="flex flex-col gap-2">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-px shrink-0 text-accent">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;