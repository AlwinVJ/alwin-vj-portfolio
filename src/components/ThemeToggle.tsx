import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark terminal theme
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-1.5 text-neutral-600 dark:text-[#00E676] hover:text-[#15803D] dark:hover:text-[#00FF88] rounded-md hover:bg-neutral-100 dark:hover:bg-[#04150C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]"
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />}
    </button>
  );
};
