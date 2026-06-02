import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewport } from "../utils/variants";


const ProjectCard = ({ project }) => {
  const { eyebrow, title, desc, tags, featured } = project;

  return (
    <motion.article
      variants={fadeUp}
      className={`flex flex-col rounded-2xl border border-border bg-paper-card p-8 transition-all hover:-translate-y-0.5 hover:border-[#C8B8B0] hover:shadow-[0_8px_30px_rgba(26,24,20,0.09)] ${
        featured ? "md:col-span-2 md:flex-row md:items-start md:gap-10" : ""
      }`}
    >
      <div className={featured ? "flex-1" : "flex flex-1 flex-col"}>
        <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-accent">
          {eyebrow}
        </p>
        <h3 className="mb-3 font-serif text-[1.3rem] leading-tight text-ink">{title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-soft">{desc}</p>
        <div className="mb-6 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[5px] border border-border bg-paper-warm px-2.5 py-0.5 font-mono text-[0.7rem] text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-paper-warm py-24">
      <div className="mx-auto max-w-content px-8">
        <SectionHeader
          eyebrow="Work"
          title="Projects"
          desc="Real work, real impact — each project built around a specific problem."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;