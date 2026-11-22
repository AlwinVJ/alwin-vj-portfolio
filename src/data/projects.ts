export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  liveDemoUrl: string;
  githubUrl: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'aideo',
    title: 'AIdeo — AI-Powered Video Background Editor',
    category: 'AI / Computer Vision',
    description:
      'An AI-powered video editing application that allows users to modify video backgrounds while preserving the foreground subject.',
    features: [
      'Apply background blur with adjustable intensity.',
      'Replace video backgrounds with white or custom images.',
      'Use AI-based person segmentation to separate subjects from backgrounds.',
      'Preview processed videos and download the final output while preserving audio.',
    ],
    technologies: ['Python', 'Streamlit', 'OpenCV', 'MediaPipe', 'NumPy', 'FFmpeg', 'Streamlit Cloud'],
    liveDemoUrl: 'https://videoeditor-bg.streamlit.app/',
    githubUrl: 'https://github.com/AlwinVJ/videoeditor',
  },
  {
    id: 'machinequest',
    title: 'MachineQuest — AI & Data Science Blogging Platform',
    category: 'Full Stack / AI Platform',
    description:
      'A technical blogging platform dedicated to publishing and exploring content related to Artificial Intelligence, Machine Learning, Deep Learning, and Data Science.',
    features: [
      'Publish and explore technical articles.',
      'Discover content through categories and search functionality.',
      'User authentication and authorization.',
      'Content management dashboards for managing articles and categories.',
    ],
    technologies: ['Python', 'Django', 'SQLite', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3', 'PythonAnywhere'],
    liveDemoUrl: 'https://alwin1996.pythonanywhere.com/',
    githubUrl: 'https://github.com/AlwinVJ/machinequest',
  },
  {
    id: 'eda-with-python',
    title: 'EDA with Python — Interactive Data Science Learning Platform',
    category: 'Interactive Educational Platform',
    description:
      'An interactive educational platform designed to teach Exploratory Data Analysis and Data Preprocessing through structured learning resources, datasets, visualizations, and practical projects.',
    features: [
      '**Eddie — AI Learning Assistant:** An integrated AI chatbot that provides context-aware answers and explanations based on the content of the EDA learning platform.',
      'Structured learning content covering EDA and data preprocessing.',
      'Explore missing values, outliers, distributions, correlation, and feature engineering.',
      'Learn through guided explanations, datasets, visualization references, and hands-on projects.',
    ],
    technologies: ['TypeScript', 'React', 'TanStack Router', 'TanStack Start', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
    liveDemoUrl: 'https://alwinvj.github.io/eda-with-python/',
    githubUrl: 'https://github.com/AlwinVJ/eda-with-python',
  },
];
