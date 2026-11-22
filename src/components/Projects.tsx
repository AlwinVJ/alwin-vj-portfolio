import React from 'react';
import { Github, Globe } from 'lucide-react';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-6 scroll-mt-20">
      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-[#D8FFE8] font-mono mb-6">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`flex flex-col justify-between h-full rounded-lg border p-5 sm:p-6 transition-colors duration-200 bg-neutral-50/50 dark:bg-[#061A10] border-[#E5E7EB] dark:border-[rgba(0,230,118,0.2)] hover:border-[#15803D]/60 dark:hover:border-[rgba(0,230,118,0.5)] ${
              index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Top Content: Category, Title, Description, and Features */}
            <div className="space-y-3.5">
              <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#15803D] dark:text-[#00E676]">
                {project.category}
              </span>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#D8FFE8] leading-snug">
                {project.title}
              </h3>

              <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-[#B8DCC8] leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 pt-1">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700 dark:text-[#D8FFE8]">
                  Key Features
                </h4>
                <ul className="space-y-1.5 pl-4 list-disc list-outside marker:text-[#15803D] dark:marker:text-[#00E676] text-xs sm:text-[13px] text-neutral-600 dark:text-[#B8DCC8] leading-relaxed">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="pl-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Content: Tech Badges and Icon Links */}
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] dark:border-[rgba(0,230,118,0.2)] space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-[rgba(0,230,118,0.06)] border border-[#E5E7EB] dark:border-[rgba(0,230,118,0.2)] text-neutral-700 dark:text-[#B8DCC8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-[#83A995]">
                  Links
                </span>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View Source Code for ${project.title}`}
                      title="View Source Code"
                      className="p-1.5 rounded text-neutral-600 dark:text-[#B8DCC8] hover:text-[#15803D] dark:hover:text-[#00FF88] hover:bg-neutral-200/50 dark:hover:bg-[rgba(0,230,118,0.12)] focus:outline-none focus:ring-2 focus:ring-[#15803D] dark:focus:ring-[#00E676] transition-colors"
                    >
                      <Github size={18} aria-hidden="true" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live Demo for ${project.title}`}
                      title="Live Demo"
                      className="p-1.5 rounded text-neutral-600 dark:text-[#B8DCC8] hover:text-[#15803D] dark:hover:text-[#00FF88] hover:bg-neutral-200/50 dark:hover:bg-[rgba(0,230,118,0.12)] focus:outline-none focus:ring-2 focus:ring-[#15803D] dark:focus:ring-[#00E676] transition-colors"
                    >
                      <Globe size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Thin Horizontal Separator */}
      <hr className="mt-10 sm:mt-12 border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)]" />
    </section>
  );
};
