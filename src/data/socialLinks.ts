export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'linkedin' | 'github' | 'youtube' | 'instagram' | 'twitter';
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/alwinvj',
    icon: 'linkedin',
    ariaLabel: 'Alwin V J on LinkedIn',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/alwinvj',
    icon: 'github',
    ariaLabel: 'Alwin V J on GitHub',
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    url: 'https://x.com/alwinvj',
    icon: 'twitter',
    ariaLabel: 'Alwin V J on X / Twitter',
  },
];
