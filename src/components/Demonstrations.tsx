import React from 'react';
import { Play } from 'lucide-react';
import { demonstrations } from '../data/demonstrations';

export const Demonstrations: React.FC = () => {
  return (
    <section id="demonstrations" className="py-6 scroll-mt-20">
      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-[#D8FFE8] font-mono mb-2">
        Project Demonstration
      </h2>
      <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-[#B8DCC8] font-mono mb-4">
        Video demonstrations for selected projects.
      </p>

      <ul className="space-y-3 pl-4 list-disc list-outside marker:text-neutral-700 dark:marker:text-[#00E676] font-mono text-xs sm:text-[13px]">
        {demonstrations.map((demo) => (
          <li key={demo.id} className="pl-1 text-neutral-600 dark:text-[#B8DCC8] leading-relaxed">
            <a
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#15803D] dark:text-[#00E676] font-medium hover:underline dark:hover:text-[#00FF88] inline-flex items-center gap-1.5 group"
            >
              <Play
                size={11}
                className="fill-[#15803D] dark:fill-[#00E676] text-[#15803D] dark:text-[#00E676] shrink-0 group-hover:scale-110 transition-transform"
              />
              <span>{demo.title}</span>
            </a>{' '}
            – {demo.description}{' '}
            <span className="text-neutral-500 dark:text-[#83A995] text-[11px] sm:text-xs">
              ({demo.date})
            </span>
          </li>
        ))}
      </ul>

      {/* Thin Horizontal Separator */}
      <hr className="mt-10 sm:mt-12 border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)]" />
    </section>
  );
};
