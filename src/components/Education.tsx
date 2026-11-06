import React from 'react';
import { educationList } from '../data/education';

interface EducationProps {
  isMarginal?: boolean;
}

export const Education: React.FC<EducationProps> = ({ isMarginal = false }) => {
  return (
    <div
      className={
        isMarginal
          ? 'w-64 xl:w-72 font-mono text-xs'
          : 'py-6 scroll-mt-20 font-mono text-xs sm:text-[13px]'
      }
    >
      <h2
        className={
          isMarginal
            ? 'text-xs font-semibold tracking-wider uppercase text-neutral-700 dark:text-[#00FF88] mb-4 flex items-center gap-2'
            : 'text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-[#D8FFE8] mb-6'
        }
      >
        {isMarginal && <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] dark:bg-[#00E676] inline-block shadow-[0_0_8px_rgba(0,230,118,0.5)]"></span>}
        <span>Education</span>
      </h2>

      {/* Vertical timeline line with timeline points */}
      <div className="relative pl-4 border-l border-neutral-300 dark:border-[rgba(0,230,118,0.25)] space-y-6">
        {educationList.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline node point */}
            <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#15803D] dark:bg-[#00E676] ring-4 ring-[#FFFFFF] dark:ring-[#020D08] dark:shadow-[0_0_10px_rgba(0,230,118,0.5)] transition-transform group-hover:scale-125" />

            {/* Date above institution */}
            <p className="text-[11px] sm:text-xs font-medium text-[#15803D] dark:text-[#00E676]">
              {item.date}
            </p>

            {/* Institution name */}
            <h3 className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-[#D8FFE8] mt-0.5 leading-snug">
              {item.institution}
            </h3>

            {/* Degree / Program */}
            <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-[#B8DCC8] mt-0.5">
              {item.degree}
            </p>

            {/* Description */}
            <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-[#83A995] mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Thin Horizontal Separator (only when in central document flow) */}
      {!isMarginal && (
        <hr className="mt-10 sm:mt-12 border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)]" />
      )}
    </div>
  );
};
