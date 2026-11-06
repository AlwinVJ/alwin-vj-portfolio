export interface CertificationItem {
  id: string;
  title: string;
  year: string;
  issuer?: string;
  url?: string;
}

export const certifications: CertificationItem[] = [
  {
    id: 'genai',
    title: 'Generative AI Fundamentals',
    year: '2024',
  },
  {
    id: 'datascience',
    title: 'Data Science Certificate',
    year: '2024',
  },
  {
    id: 'python',
    title: 'Python Programming',
    year: '2023',
  },
  {
    id: 'ml-specialization',
    title: 'Machine Learning Specialization',
    year: '2023',
  },
  {
    id: 'sql',
    title: 'SQL for Data Analysis',
    year: '2023',
  },
];
