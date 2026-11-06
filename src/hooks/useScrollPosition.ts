import { useState, useEffect } from 'react';

export function useScrollPosition(threshold: number = 420) {
  const [scrollY, setScrollY] = useState(0);
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDimensions = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkDimensions();
    window.addEventListener('resize', checkDimensions);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          setIsPastThreshold(currentScrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkDimensions);
    };
  }, [threshold]);

  return { scrollY, isPastThreshold, isMobile };
}
