import React, { useEffect, useRef, useState } from 'react';
import { PORTRAIT_POINTS } from '../data/portraitPoints';

interface CodePortraitProps {
  className?: string;
}

export const CodePortrait: React.FC<CodePortraitProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  // Watch for theme changes on html element
  useEffect(() => {
    const checkTheme = () => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDark(dark);
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  // Completely static deterministic render: only runs on initial mount and when theme changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const size = 500;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Deterministic static render of high-density stipple portrait dots
    for (let i = 0; i < PORTRAIT_POINTS.length; i++) {
      const [x, y, r, darkTone, lightTone] = PORTRAIT_POINTS[i];

      if (isDark) {
        // Dark Mode: Green halftone aesthetic matching Image 2 reference
        if (darkTone < 0.03) continue;

        let fill: string;
        let alpha: number;
        const rad = r * (0.65 + darkTone * 0.45);

        if (darkTone >= 0.70) {
          fill = '#00FF88'; // Bright neon green highlight (forehead, cheek, laptop lid)
          alpha = Math.min(1.0, 0.85 + darkTone * 0.15);
        } else if (darkTone >= 0.42) {
          fill = '#00E676'; // Primary terminal green
          alpha = Math.min(0.95, 0.70 + darkTone * 0.25);
        } else if (darkTone >= 0.22) {
          fill = '#00B359'; // Mid-tone green shading
          alpha = 0.55 + darkTone * 0.35;
        } else {
          fill = '#007A3D'; // Deep green shadows and fine particles
          alpha = 0.40 + darkTone * 0.35;
        }

        ctx.fillStyle = fill;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Light Mode: Monochrome halftone portrait matching original sketch art
        if (lightTone < 0.04) continue;

        let fill: string;
        let alpha: number;
        const rad = r * (0.55 + lightTone * 0.55);

        if (lightTone >= 0.65) {
          fill = '#0A0A0A'; // Deep black features (beard, eyes, dark shirt folds)
          alpha = 1.0;
        } else if (lightTone >= 0.40) {
          fill = '#1F2937'; // Dark charcoal ink
          alpha = Math.min(0.95, 0.75 + lightTone * 0.25);
        } else if (lightTone >= 0.20) {
          fill = '#374151'; // Charcoal gray shading
          alpha = 0.60 + lightTone * 0.30;
        } else {
          fill = '#6B7280'; // Soft sketch shading and fine particles
          alpha = 0.40 + lightTone * 0.35;
        }

        ctx.fillStyle = fill;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1.0;
  }, [isDark]);

  return (
    <div
      className={`relative inline-block select-none ${className}`}
      aria-label="Static stippled portrait of Alwin working on laptop"
      role="img"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-auto max-w-[260px] sm:max-w-[280px] lg:max-w-[300px] block"
        style={{
          aspectRatio: '1 / 1',
        }}
      />
    </div>
  );
};
