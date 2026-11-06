export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies?: string;
  date: string;
  link?: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface ProjectsData {
  mainProject: ProjectItem;
  groupProjects: ProjectItem[];
  miniAiProjects: ProjectItem[];
  otherMiniProjects: ProjectItem[];
}

export const projectsData: ProjectsData = {
  mainProject: {
    id: 'mealmate',
    title: 'MealMate — AI Meal Planning Platform',
    description: 'AI powered meal planner with personalized meal plans, grocery list and rewards.',
    date: 'November 2024 – Present',
    link: '#',
    repoUrl: 'https://github.com/alwinvj/mealmate',
    demoUrl: '#mealmate-demo',
  },
  groupProjects: [
    {
      id: 'hired-crm',
      title: 'HireD CRM & Logistics Platform',
      description: 'Full stack platform connecting businesses with drivers. Web admin panel, mobile app and FastAPI backend.',
      technologies: 'React, React Native, FastAPI, PostgreSQL',
      date: 'October 2024 – Present',
      link: '#',
      repoUrl: 'https://github.com/alwinvj/hired-crm',
    },
    {
      id: 'newsverify',
      title: 'NewsVerify',
      description: 'News verification system with multi source scraping, social media (Instagram) support and automated fact checking.',
      technologies: 'Python, LLMs, Web Scraping, Instagram/Social media sources',
      date: 'September 2025',
      link: '#',
      repoUrl: 'https://github.com/alwinvj/newsverify',
    },
    {
      id: 'seekify',
      title: 'Seekify',
      description: 'Search and summarize web content using LLMs, web search and RAG.',
      technologies: 'Python, Streamlit, LangChain, ChromaDB',
      date: 'August 2024',
      link: '#',
      repoUrl: 'https://github.com/alwinvj/seekify',
    },
  ],
  miniAiProjects: [
    {
      id: 'ml-pending-bucket',
      title: 'ML Pending Bucket',
      description: 'Track and manage pending ML/DS topics after each module review with a simple and clean UI.',
      date: 'July 2024',
      link: '#',
    },
    {
      id: 'linear-regression-lab',
      title: 'Linear Regression Lab',
      description: 'Interactive visualizations and from-scratch implementations of Linear, Polynomial, Ridge and Lasso Regression.',
      date: 'June 2024',
      link: '#',
    },
    {
      id: 'classification-lab',
      title: 'Classification Lab',
      description: 'Learn and compare classification models with interactive visualizations and evaluation metrics.',
      date: 'June 2024',
      link: '#',
    },
  ],
  otherMiniProjects: [
    {
      id: 'resumetailor',
      title: 'ResumeTailor',
      description: 'AI resume analyzer and suggestion system.',
      date: 'May 2024',
      link: '#',
    },
    {
      id: 'url-shortener',
      title: 'URL Shortener',
      description: 'Simple URL shortener with analytics.',
      date: 'April 2024',
      link: '#',
    },
    {
      id: 'finance-tracker',
      title: 'Finance Tracker',
      description: 'Personal expense tracking and visualization.',
      date: 'March 2024',
      link: '#',
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      description: 'Real time weather information using APIs.',
      date: 'February 2024',
      link: '#',
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'This personal portfolio website.',
      date: 'January 2024',
      link: '#',
    },
  ],
};
