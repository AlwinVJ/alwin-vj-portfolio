import React from 'react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-6 pb-16 font-mono text-xs text-neutral-500 dark:text-[#83A995]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-center sm:text-left">
          © {currentYear} Alwin V J. All rights reserved.
        </p>

        {/* Footer Navigation */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <a
            href="#home"
            className="hover:text-[#15803D] dark:hover:text-[#00FF88] transition-colors"
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-[#15803D] dark:hover:text-[#00FF88] transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-[#15803D] dark:hover:text-[#00FF88] transition-colors"
          >
            Skills
          </a>
          <a
            href="#achievements"
            className="hover:text-[#15803D] dark:hover:text-[#00FF88] transition-colors"
          >
            Achievements
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-[#15803D] dark:hover:text-[#00FF88] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </div>
    </footer>
  );
};
