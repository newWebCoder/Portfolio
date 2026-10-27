import { motion } from "framer-motion";
import { certifications, education } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewport } from "../utils/variants";

const Education = () => (
  <section id="education" className="bg-paper-warm py-24">
    <div className="mx-auto max-w-content px-8">
      <SectionHeader
        eyebrow="Learning"
        title="Education & certifications"
      />

      <motion.div
        className="grid gap-10 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div>
          <h3 className="mb-5 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-ink-muted">
            Education
          </h3>
          <div className="flex flex-col gap-4">
            {education.map(({ degree, institution }) => (
              <motion.article
                key={degree}
                variants={fadeUp}
                className="rounded-xl border border-border bg-paper-card p-5"
              >
                <h4 className="mb-2 font-sans text-base font-semibold leading-snug text-ink">
                  {degree}
                </h4>
                <p className="text-sm text-ink-soft">{institution}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-ink-muted">
            Certifications
          </h3>
          <div className="flex flex-col gap-4">
            {certifications.map(({ icon, title }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                className="flex items-center gap-4 rounded-xl border border-border bg-paper-card p-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-lt text-lg text-accent"
                >
                  {icon}
                </span>
                <h4 className="font-sans text-base font-semibold leading-snug text-ink">
                  {title}
                </h4>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
