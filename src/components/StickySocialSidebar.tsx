import React, { useState } from 'react';
import { socialLinks } from '../data/socialLinks';
import { SocialIcon } from './SocialIcon';

interface StickySocialSidebarProps {
  isVisible: boolean;
}

export const StickySocialSidebar: React.FC<StickySocialSidebarProps> = ({ isVisible }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <aside
      aria-label="Social profiles sticky sidebar"
      style={{
        left: 'max(14px, calc(var(--portfolio-left-margin) - 52px))',
      }}
      className={`fixed top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-x-0 pointer-events-auto'
          : 'opacity-0 -translate-x-8 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 dark:bg-[#061A10]/95 backdrop-blur-md border border-neutral-200/90 dark:border-[rgba(0,230,118,0.25)] shadow-md shadow-neutral-900/5 dark:shadow-[0_0_15px_rgba(0,0,0,0.6)] rounded-lg p-1.5 flex flex-col gap-1">
        {socialLinks.map((link) => (
          <div key={link.id} className="relative flex items-center">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="p-2 text-neutral-600 dark:text-[#00E676] hover:text-[#15803D] dark:hover:text-[#00FF88] transition-all duration-150 transform hover:translate-x-1 hover:scale-110 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]"
            >
              <SocialIcon name={link.icon} size={18} />
            </a>

            {/* Tooltip pointing toward content (to the right) */}
            <div
              className={`absolute left-full ml-3 px-2.5 py-1 bg-neutral-900/95 dark:bg-[#061A10]/95 text-white dark:text-[#D8FFE8] text-[11px] font-mono rounded shadow-sm border border-transparent dark:border-[rgba(0,230,118,0.3)] whitespace-nowrap pointer-events-none transition-all duration-150 z-50 flex items-center gap-1.5 ${
                hoveredId === link.id
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-1'
              }`}
            >
              <span>{link.name}</span>
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-neutral-900/95 dark:border-r-[#061A10]/95" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
