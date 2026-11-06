import React from 'react';
import { CodePortrait } from './CodePortrait';

interface HeroIllustrationProps {
  className?: string;
}

export const HeroIllustration: React.FC<HeroIllustrationProps> = ({ className = '' }) => {
  return <CodePortrait className={className} />;
};
