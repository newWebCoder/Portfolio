import { motion } from "framer-motion";
import { aboutBio, aboutCards, meta } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewport } from "../utils/variants";

const About = () => {
  return (
    <section id="about" className="bg-paper-card py-24">
      <div className="mx-auto max-w-content px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="About me"
              title={
                <>
                  Building high-performance user interfaces and 
                  <br />
                  scalable web platforms.
                </>
              }
            />

            {aboutBio.map((paragraph, i) => (
              <motion.p
                key={i}
                className="mb-6 text-lg leading-[1.8] text-ink-soft last:mb-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ delay: i * 0.1 }}
              >
                {i === 0 ? (
                  <>
                    I started with{" "}
                    <strong className="font-medium text-ink">HTML, SCSS, and jQuery</strong> —
                    building interfaces the traditional way. Over 4+ years at Powerweave, I
                    grew into designing full UI systems on the{" "}
                    <strong className="font-medium text-ink">Ewiz Commerce</strong> stack for
                    enterprise B2B clients.
                  </>
                ) : (
                  <>
                    Today I specialise in{" "}
                    <strong className="font-medium text-ink">React.js</strong> — writing
                    component architectures that are reusable, maintainable, and fast. I care
                    about code that scales, not just code that ships.
                  </>
                )}
              </motion.p>
            ))}

            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-paper-warm px-4 py-2 text-sm text-ink-soft"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <span className="text-base text-accent">↗</span>
              {meta.upskilling}
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {aboutCards.map(({ icon, title, body }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                className="flex gap-4 rounded-xl border border-border bg-paper p-5 transition-all hover:border-[#C8B8B0] hover:shadow-[0_4px_16px_rgba(26,24,20,0.06)]"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-accent-lt text-base">
                  {icon}
                </span>
                <div>
                  <h4 className="mb-1 text-sm font-medium text-ink">{title}</h4>
                  <p className="text-[0.825rem] leading-relaxed text-ink-soft">{body}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;