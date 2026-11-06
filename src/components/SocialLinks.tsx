import React, { useState } from 'react';
import { socialLinks } from '../data/socialLinks';
import { SocialIcon } from './SocialIcon';

interface SocialLinksProps {
  isPastThreshold?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ isPastThreshold = false }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isPastThreshold
          ? 'lg:opacity-0 lg:pointer-events-none lg:-translate-y-2'
          : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="flex items-center gap-5 sm:gap-6 py-2">
        {socialLinks.map((link) => (
          <div key={link.id} className="relative group">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="block p-1 text-neutral-800 dark:text-[#00E676] hover:text-[#15803D] dark:hover:text-[#00FF88] transition-all duration-150 transform hover:-translate-y-0.5 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] rounded"
            >
              <SocialIcon name={link.icon} size={20} />
            </a>

            {/* Subtle Tooltip */}
            <div
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 bg-neutral-900/95 dark:bg-[#061A10]/95 text-white dark:text-[#D8FFE8] text-[10px] font-mono rounded shadow-sm border border-transparent dark:border-[rgba(0,230,118,0.3)] whitespace-nowrap pointer-events-none transition-all duration-150 ${
                hoveredId === link.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-1'
              }`}
            >
              {link.name}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900/95 dark:border-t-[#061A10]/95" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
