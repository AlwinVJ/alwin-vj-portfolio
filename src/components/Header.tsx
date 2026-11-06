import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-[#FFFFFF]/90 dark:bg-[#020D08]/90 backdrop-blur-md border-b border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)] transition-colors">
      <div className="portfolio-desktop-container w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-14 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-[#D8FFE8] hover:text-[#15803D] dark:hover:text-[#00FF88] transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#15803D] dark:bg-[#00E676] inline-block shadow-[0_0_8px_rgba(0,230,118,0.5)]"></span>
          <span>alwin.vj</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-xs text-neutral-600 dark:text-[#B8DCC8]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#15803D] dark:hover:text-[#00FF88] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenContact}
            className="hover:text-[#15803D] dark:hover:text-[#00FF88] transition-colors cursor-pointer"
          >
            Contact
          </button>
          <div className="pl-2 border-l border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)] flex items-center">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button & Theme toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-600 dark:text-[#00E676] hover:text-neutral-900 dark:hover:text-[#00FF88] rounded focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)] bg-[#FFFFFF] dark:bg-[#020D08] px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs py-1 text-neutral-700 dark:text-[#B8DCC8] hover:text-[#15803D] dark:hover:text-[#00FF88]"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="block text-xs py-1 text-left w-full text-neutral-700 dark:text-[#B8DCC8] hover:text-[#15803D] dark:hover:text-[#00FF88]"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
