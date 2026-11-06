export interface SkillCategory {
  title: string;
  items: string[];
}

export interface SkillColumns {
  leftColumn: SkillCategory[];
  rightColumn: SkillCategory[];
}

export const technicalSkills: SkillColumns = {
  leftColumn: [
    {
      title: 'Languages',
      items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      title: 'LLM Ecosystem',
      items: ['OpenAI', 'Groq', 'Mistral', 'Llama', 'LangChain', 'LangGraph', 'RAG', 'ChromaDB', 'Ollama'],
    },
    {
      title: 'Frameworks',
      items: ['React', 'Vite', 'Tailwind CSS', 'Flutter', 'FastAPI', 'Django', 'Flask', 'Streamlit'],
    },
    {
      title: 'Data Analysis & Visualization',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
    },
    {
      title: 'Cloud & Deployment',
      items: ['Git', 'Docker', 'Linux', 'Firebase', 'Render', 'Vercel', 'AWS basics', 'CI/CD basics'],
    },
  ],
  rightColumn: [
    {
      title: 'AI / Machine Learning',
      items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'OpenCV', 'NLP', 'Computer Vision'],
    },
    {
      title: 'Agentic AI & Tools',
      items: ['LangChain', 'AutoGen', 'CrewAI', 'ReAct', 'Function Calling', 'Tool Use'],
    },
    {
      title: 'Web & Mobile Development',
      items: ['React', 'React Native', 'Flutter', 'Django', 'FastAPI', 'REST APIs'],
    },
    {
      title: 'MLOps & Data Engineering',
      items: ['PostgreSQL', 'SQLite', 'Alembic', 'ETL', 'Data Pipelines'],
    },
    {
      title: 'Systems & Tools',
      items: ['VS Code', 'GitHub', 'Postman', 'Jupyter', 'Conda', 'Linux'],
    },
    {
      title: 'Core Concepts',
      items: ['Machine Learning', 'Deep Learning', 'Statistics', 'Probability', 'Data Structures', 'System Design'],
    },
  ],
};
