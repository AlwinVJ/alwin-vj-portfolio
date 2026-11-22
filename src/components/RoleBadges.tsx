import React from 'react';
import { LucideIcon, BrainCircuit, Code2, Bot, GitBranch } from 'lucide-react';

interface RoleBadgeItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const roleBadges: RoleBadgeItem[] = [
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: BrainCircuit,
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    icon: Code2,
  },
  {
    id: 'generative-ai-engineer',
    title: 'Generative AI Engineer',
    icon: Bot,
  },
  {
    id: 'forward-deployment-engineer',
    title: 'Forward Deployment Engineer',
    icon: GitBranch,
  },
];

interface RoleBadgesProps {
  className?: string;
}

export const RoleBadges: React.FC<RoleBadgesProps> = ({ className = '' }) => {
  return (
    <div
      aria-label="Professional roles"
      className={`shrink-0 flex flex-col justify-center gap-2.5 w-full sm:w-[260px] xl:w-[270px] select-none font-mono ${className}`}
    >
      {roleBadges.map((role) => {
        const Icon = role.icon;
        return (
          <div
            key={role.id}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)] bg-[#F5F7F5] dark:bg-[#061A10]/90 text-neutral-800 dark:text-[#D8FFE8] hover:border-[#15803D] dark:hover:border-[#00FF88] dark:hover:shadow-[0_0_12px_rgba(0,230,118,0.15)] transition-all duration-200 group"
          >
            <span className="p-1.5 rounded-md border border-[#E5E7EB] dark:border-[rgba(0,230,118,0.3)] bg-white dark:bg-[rgba(0,230,118,0.08)] text-[#15803D] dark:text-[#00E676] group-hover:scale-105 transition-transform shrink-0">
              <Icon size={14} strokeWidth={2} />
            </span>
            <span className="text-xs font-mono font-medium tracking-tight whitespace-nowrap">
              {role.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};
