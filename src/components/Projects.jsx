import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewport } from "../utils/variants";


const ProjectCard = ({ project, index }) => {
  const { eyebrow, title, desc, tags, featured } = project;

  return (
    <motion.article
      variants={fadeUp}
      className={`project-card group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-paper-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_18px_48px_rgba(0,0,0,0.4)] sm:p-8 ${
        featured ? "md:col-span-2 md:flex-row md:items-start md:gap-10" : ""
      }`}
    >
      <div className="project-art absolute inset-0" aria-hidden="true">
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-shape" />
      </div>
      <div className={`relative z-10 ${featured ? "flex-1" : "flex flex-1 flex-col"}`}>
        <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[#ff737b]">
          {eyebrow}
        </p>
        <h3 className="mb-3 font-sans text-[1.35rem] font-bold leading-tight text-white sm:text-2xl">{title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-white/75">{desc}</p>
        <div className="mb-6 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[5px] border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[0.65rem] text-white/75"
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
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;