import React from 'react';
import { achievements } from '../data/achievements';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-6 scroll-mt-20">
      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-[#D8FFE8] font-mono mb-4">
        Achievements
      </h2>

      <ul className="space-y-3 pl-4 list-disc list-outside marker:text-neutral-700 dark:marker:text-[#00E676] font-mono text-xs sm:text-[13px]">
        {achievements.map((item) => (
          <li key={item.id} className="pl-1 text-neutral-600 dark:text-[#B8DCC8] leading-relaxed">
            <span className="font-semibold text-neutral-900 dark:text-[#D8FFE8]">
              {item.title}
            </span>{' '}
            – {item.description}
          </li>
        ))}
      </ul>

      {/* Thin Horizontal Separator */}
      <hr className="mt-10 sm:mt-12 border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)]" />
    </section>
  );
};
