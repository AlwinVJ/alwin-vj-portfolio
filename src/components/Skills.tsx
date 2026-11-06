import React from 'react';
import { technicalSkills } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-6 scroll-mt-20">
      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-[#D8FFE8] font-mono mb-6">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-6">
        {/* Left Column */}
        <div className="space-y-5">
          {technicalSkills.leftColumn.map((category) => (
            <div key={category.title} className="space-y-1">
              <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-[#D8FFE8] font-mono">
                {category.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-[#B8DCC8] font-mono leading-relaxed">
                {category.items.join(', ')}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          {technicalSkills.rightColumn.map((category) => (
            <div key={category.title} className="space-y-1">
              <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-[#D8FFE8] font-mono">
                {category.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-[#B8DCC8] font-mono leading-relaxed">
                {category.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Thin Horizontal Separator */}
      <hr className="mt-10 sm:mt-12 border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)]" />
    </section>
  );
};
