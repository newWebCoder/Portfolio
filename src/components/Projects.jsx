import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer, viewport } from "../utils/variants";

const ExternalIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const { eyebrow, title, desc, tags, featured, link, github, linkLabel } = project;

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