export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceList: ExperienceItem[] = [
  {
    id: 'chefintech-aiml-intern',
    role: 'AI/ML Intern',
    company: 'ChefInTech',
    location: 'Kochi',
    date: 'Jan 2024 – Aug 2024',
    responsibilities: [
      'Fine-tuned models to generate diet plans based on user inputs.',
      'Handled data collection and analysis to support model development.',
      'Optimized prompt formats for summarization, question answering, and text classification, improving response accuracy and consistency from the OpenAI API.',
    ],
    technologies: ['Python', 'OpenAI API', 'Postman'],
  },
  {
    id: 'chefintech-flutter-developer',
    role: 'Flutter Developer',
    company: 'ChefInTech',
    location: 'Kochi',
    date: 'Jul 2023 – Aug 2024',
    responsibilities: [
      'Developed a cross-platform mobile application using Flutter and Dart with a Firebase backend.',
      'Collaborated with UI/UX designers and QA testers to deliver a responsive, high-quality application.',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase'],
  },
];
