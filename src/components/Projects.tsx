import React from 'react';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-6 scroll-mt-20">
      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-[#D8FFE8] font-mono mb-6">
        Projects
      </h2>

      <div className="space-y-8 font-mono text-xs sm:text-[13px]">
        {/* Main Project */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-[#D8FFE8]">
            Main Project
          </h3>
          <ul className="space-y-2 pl-4 list-disc list-outside marker:text-neutral-700 dark:marker:text-[#00E676]">
            <li className="pl-1">
              <div className="space-y-1">
                <a
                  href={projectsData.mainProject.repoUrl || projectsData.mainProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#15803D] dark:text-[#00E676] font-medium hover:underline dark:hover:text-[#00FF88] inline-block"
                >
                  {projectsData.mainProject.title}
                </a>
                <p className="text-neutral-600 dark:text-[#B8DCC8] leading-relaxed">
                  {projectsData.mainProject.description}
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-[#83A995]">
                  ({projectsData.mainProject.date})
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Group Projects */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-[#D8FFE8]">
            Group Projects
          </h3>
          <ul className="space-y-4 pl-4 list-disc list-outside marker:text-neutral-700 dark:marker:text-[#00E676]">
            {projectsData.groupProjects.map((project) => (
              <li key={project.id} className="pl-1">
                <div className="space-y-1">
                  <a
                    href={project.repoUrl || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#15803D] dark:text-[#00E676] font-medium hover:underline dark:hover:text-[#00FF88] inline-block"
                  >
                    {project.title}
                  </a>
                  <p className="text-neutral-600 dark:text-[#B8DCC8] leading-relaxed">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-[#83A995]">
                      <span className="font-medium text-neutral-700 dark:text-[#D8FFE8]">Technology:</span>{' '}
                      {project.technologies}
                    </p>
                  )}
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-[#83A995]">
                    ({project.date})
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mini AI Projects */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-[#D8FFE8]">
            Mini AI Projects
          </h3>
          <ul className="space-y-4 pl-4 list-disc list-outside marker:text-neutral-700 dark:marker:text-[#00E676]">
            {projectsData.miniAiProjects.map((project) => (
              <li key={project.id} className="pl-1">
                <div className="space-y-1">
                  <a
                    href={project.link || '#'}
                    className="text-[#15803D] dark:text-[#00E676] font-medium hover:underline dark:hover:text-[#00FF88] inline-block"
                  >
                    {project.title}
                  </a>
                  <p className="text-neutral-600 dark:text-[#B8DCC8] leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-[#83A995]">
                    ({project.date})
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Mini Projects */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-[#D8FFE8]">
            Other Mini Projects
          </h3>
          <ul className="space-y-2 pl-4 list-disc list-outside marker:text-neutral-700 dark:marker:text-[#00E676]">
            {projectsData.otherMiniProjects.map((project) => (
              <li key={project.id} className="pl-1 text-neutral-600 dark:text-[#B8DCC8]">
                <a
                  href={project.link || '#'}
                  className="text-[#15803D] dark:text-[#00E676] font-medium hover:underline dark:hover:text-[#00FF88]"
                >
                  {project.title}
                </a>{' '}
                – {project.description}{' '}
                <span className="text-neutral-500 dark:text-[#83A995] text-[11px] sm:text-xs">
                  ({project.date})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Thin Horizontal Separator */}
      <hr className="mt-10 sm:mt-12 border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)]" />
    </section>
  );
};
