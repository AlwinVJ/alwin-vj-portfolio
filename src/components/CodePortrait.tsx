import React from 'react';
import profileDark from '../assets/profile-dark.jpg';
import profileLight from '../assets/profile-light.jpg';

interface CodePortraitProps {
  className?: string;
}

export const CodePortrait: React.FC<CodePortraitProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      aria-label="Portrait illustration of Alwin V J"
      role="img"
    >
      {/* Dark Mode Profile Artwork:
          1. mix-blend-mode: screen renders near-black background (0,0,0) as mathematically 100% transparent on #020D08.
          2. filter: contrast(1.02) brightness(0.98) ensures any near-black background noise maps strictly to pure 0.
          3. Elliptical radial-gradient mask smoothly feathers stray crosshatch strokes to 0 opacity at the perimeter.
      */}
      <img
        src={profileDark}
        alt="Alwin V J - Data Scientist & Full Stack Developer (Dark Mode)"
        className="hidden dark:block w-full h-auto object-contain select-none transition-opacity duration-300"
        style={{
          mixBlendMode: 'screen',
          filter: 'contrast(1.02) brightness(0.98)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 90% at 50% 52%, black 60%, rgba(0, 0, 0, 0.85) 75%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 95% 90% at 50% 52%, black 60%, rgba(0, 0, 0, 0.85) 75%, transparent 100%)',
        }}
        loading="eager"
        decoding="async"
      />

      {/* Light Mode Profile Artwork:
          1. mix-blend-mode: multiply renders pure white (255,255,255) as mathematically 100% transparent on #FFFFFF.
          2. filter: contrast(1.05) brightness(1.01) lifts the 252 off-white background cleanly to pure 255.
          3. Elliptical radial-gradient mask gently dissolves outer boundaries and edge construction lines.
      */}
      <img
        src={profileLight}
        alt="Alwin V J - Data Scientist & Full Stack Developer (Light Mode)"
        className="block dark:hidden w-full h-auto object-contain select-none transition-opacity duration-300"
        style={{
          mixBlendMode: 'multiply',
          filter: 'contrast(1.05) brightness(1.01)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 90% at 50% 52%, black 60%, rgba(0, 0, 0, 0.85) 75%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 95% 90% at 50% 52%, black 60%, rgba(0, 0, 0, 0.85) 75%, transparent 100%)',
        }}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export const ProfileImage = CodePortrait;
