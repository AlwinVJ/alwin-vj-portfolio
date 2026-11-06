import React from 'react';
import { Mail, FileText, Brain, Code2, Cpu, GitPullRequest } from 'lucide-react';
import { CodePortrait } from './CodePortrait';
import { SocialLinks } from './SocialLinks';

interface HeroProps {
  onOpenContact: () => void;
  isPastThreshold: boolean;
  resumePath?: string;
}

const roleIndicators = [
  {
    title: 'Data Science Learner',
    icon: Brain,
  },
  {
    title: 'Full Stack Developer',
    icon: Code2,
  },
  {
    title: 'ML & LLM Builder',
    icon: Cpu,
  },
  {
    title: 'Open Source Contributor',
    icon: GitPullRequest,
  },
];

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  isPastThreshold,
  resumePath,
}) => {
  const defaultResumePath = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/assets/Alwin_VJ_Resume.pdf`;
  const resolvedResumePath = resumePath || defaultResumePath;
  return (
    <section id="home" className="pt-6 sm:pt-10 pb-4 scroll-mt-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-6 xl:gap-8">
        {/* Left Column: Introduction, Buttons, and Social Links */}
        <div className="flex-1 w-full space-y-4 max-w-xl">
          {/* Name & Title */}
          <div className="flex flex-wrap items-baseline gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-[#D8FFE8] font-mono">
              Alwin V J
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-[#D8FFE8] font-mono leading-snug">
            Building AI powered solutions for real world problems
          </h2>

          {/* Bio Description */}
          <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-600 dark:text-[#B8DCC8] font-mono">
            I'm a Data Science and Machine Learning engineer who enjoys turning ideas into useful products. I work on LLM applications, computer vision, data analysis, and full stack development to solve practical problems. I love learning, building, and sharing what I learn through open source and projects.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {/* Primary Button: Get in touch */}
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-mono font-medium rounded bg-[#15803D] hover:bg-[#166534] text-white dark:bg-[#00E676] dark:hover:bg-[#00FF88] dark:text-[#020D08] dark:font-semibold transition-all shadow-sm dark:shadow-[0_0_15px_rgba(0,230,118,0.25)] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:ring-offset-2 dark:focus:ring-offset-[#020D08]"
            >
              <Mail size={15} />
              <span>Get in touch</span>
            </button>

            {/* Secondary Button: Download Resume */}
            <a
              href={resolvedResumePath}
              download="Alwin_VJ_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-mono font-medium rounded border border-[#E5E7EB] dark:border-[rgba(0,230,118,0.4)] bg-white dark:bg-[#04150C] text-neutral-800 dark:text-[#00FF88] hover:bg-neutral-50 dark:hover:bg-[#061A10] dark:hover:border-[#00FF88] transition-all focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:ring-offset-2 dark:focus:ring-offset-[#020D08]"
            >
              <FileText size={15} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Icons (Horizontal row initially, fades when sticky sidebar activates) */}
          <div className="pt-2">
            <SocialLinks isPastThreshold={isPastThreshold} />
          </div>
        </div>

        {/* Center Column: Procedural Code Portrait of Alwin working on laptop */}
        <div className="shrink-0 flex items-center justify-center pt-2 lg:pt-0">
          <CodePortrait />
        </div>

        {/* Right Column: Role Indicators */}
        <div className="shrink-0 flex flex-col justify-center gap-2.5 w-full sm:w-auto lg:min-w-[210px] select-none">
          {roleIndicators.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="flex items-center gap-3 px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)] bg-[#F5F7F5] dark:bg-[#061A10]/90 text-neutral-800 dark:text-[#D8FFE8] hover:border-[#15803D] dark:hover:border-[#00FF88] dark:hover:shadow-[0_0_12px_rgba(0,230,118,0.15)] transition-all duration-200 group"
              >
                <span className="p-1.5 rounded-md border border-[#E5E7EB] dark:border-[rgba(0,230,118,0.3)] bg-white dark:bg-[rgba(0,230,118,0.08)] text-[#15803D] dark:text-[#00E676] group-hover:scale-105 transition-transform">
                  <Icon size={14} strokeWidth={2} />
                </span>
                <span className="text-xs font-mono font-medium tracking-tight">
                  {role.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Thin Horizontal Separator */}
      <hr className="mt-10 sm:mt-12 border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)]" />
    </section>
  );
};
