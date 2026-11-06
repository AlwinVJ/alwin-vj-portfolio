export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  date: string;
  description: string;
}

export const educationList: EducationItem[] = [
  {
    id: 'iit-madras',
    institution: 'Indian Institute of Technology, Madras',
    degree: 'BS in Data Science & its Applications',
    date: 'Jan 2024 – Present',
    description: 'Specializing in Machine Learning, Deep Learning, Generative AI and Agentic AI Systems.',
  },
  {
    id: 'nct',
    institution: 'National Council of Technology and Training, Delhi',
    degree: 'Diploma in Mobile Application Development',
    date: 'May 2021 – Apr 2022',
    description: 'Cross Platform Application Development using Dart and Flutter Framework.',
  },
];
