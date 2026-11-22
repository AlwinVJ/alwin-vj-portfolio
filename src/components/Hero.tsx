import React, { useState, useEffect } from 'react';
import { Mail, FileText } from 'lucide-react';
import { CodePortrait } from './CodePortrait';
import { SocialLinks } from './SocialLinks';
import { RoleBadges } from './RoleBadges';

interface HeroProps {
  onOpenContact: () => void;
  isPastThreshold: boolean;
  resumePath?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  isPastThreshold,
  resumePath,
}) => {
  const [isWideDesktop, setIsWideDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Synchronize with the portfolio wide desktop threshold (>= 1600px)
      setIsWideDesktop(window.innerWidth >= 1600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultResumePath = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/assets/Alwin_VJ_Resume.pdf`;
  const resolvedResumePath = resumePath || defaultResumePath;
  return (
    <section id="home" className="pt-6 sm:pt-10 pb-4 scroll-mt-20">
      <div className="relative flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-8 xl:gap-10">
        {/* Left Column: Introduction, Buttons, and Social Links */}
        <div className="w-full lg:w-[500px] xl:w-[540px] shrink-0 space-y-4.5 sm:space-y-5">
          {/* Name & Title */}
          <div className="flex flex-wrap items-baseline gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-[#D8FFE8] font-mono">
              Alwin V J
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-[15px] sm:text-base lg:text-[16px] xl:text-[17px] font-semibold text-neutral-800 dark:text-[#D8FFE8] font-mono leading-snug tracking-tight whitespace-normal sm:whitespace-nowrap">
            Building AI Solutions That Work in the Real World
          </h2>

          {/* Bio Description */}
          <p className="text-[13px] sm:text-sm lg:text-[14.5px] xl:text-[15px] leading-relaxed text-neutral-600 dark:text-[#B8DCC8] font-mono text-justify">
            I'm a Data Scientist and Generative AI engineer focused on taking AI from idea to deployment. I work on computer vision, LLM applications and full-stack development, and I'm drawn to forward deployed engineering, where the goal is to understand a real problem, build the solution and put it in people's hands. I learn by building and share what I learn through open-source projects.
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

        {/* Center-Right Column: Theme-specific Profile Image (Moved horizontally towards the right, closer to badges) */}
        <div className="shrink-0 flex items-center justify-center w-[280px] sm:w-[330px] md:w-[360px] lg:w-[380px] xl:w-[420px] pt-2 lg:pt-0 lg:ml-auto">
          <CodePortrait className="w-full" />
        </div>

        {/* Right Column: Professional Role Badges (Positions above Education timeline location on wide desktop) */}
        <div
          className={`shrink-0 flex flex-col justify-center select-none ${
            isWideDesktop
              ? 'absolute left-[calc(100%+2rem)] top-1/2 -translate-y-1/2 z-20 w-64 xl:w-72'
              : 'w-full sm:w-auto lg:min-w-[210px]'
          }`}
        >
          <RoleBadges />
        </div>
      </div>

      {/* Thin Horizontal Separator */}
      <hr className="mt-10 sm:mt-12 border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)]" />
    </section>
  );
};
