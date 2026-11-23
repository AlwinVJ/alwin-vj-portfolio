export interface FaqBullet {
  label: string;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  bulletPoints?: FaqBullet[];
}

export const faqs: FaqItem[] = [
  {
    id: 'tell-me-about-yourself',
    question: 'Tell me about yourself.',
    answer:
      "I'm a Data Scientist and AI Engineer who turns ideas into software people can actually rely on. I work close to the problem, the way a forward deployed engineer does, and I'm not satisfied until a model is useful in the real world. My work spans computer vision, LLM applications, and interactive learning platforms. I learn by building: I break things, fix them, and share what I find through open-source labs and projects. I care about clarity, reliability, and making complex systems feel simple to use.",
  },
  {
    id: 'suitable-for-ai-engineering',
    question: 'What makes you suitable for AI engineering roles?',
    answer:
      "I build AI that ships. From training models in PyTorch and XGBoost to RAG-powered LLM apps with LangChain, Llama, and Mistral, I take systems end to end: FastAPI backends, computer vision pipelines, and live deployments.",
  },
  {
    id: 'flagship-projects',
    question: 'What are your flagship projects, and what real-world problems do they solve?',
    answer:
      'My flagship projects focus on practical, interactive problem-solving:',
    bulletPoints: [
      {
        label: 'AIdeo',
        text: 'An AI-powered video background editor built with Python, OpenCV, MediaPipe, and FFmpeg, deployed on Streamlit Cloud. It performs real-time person segmentation to blur or replace backgrounds without greenscreens while preserving audio.',
      },
      {
        label: 'EDA with Python',
        text: 'An interactive data science educational platform built with TypeScript, React, Vite, and GitHub Pages. It features Eddie, an integrated AI chatbot that provides context-aware explanations on data preprocessing and exploratory data analysis.',
      },
      {
        label: 'MachineQuest',
        text: 'A full-stack technical blogging platform built with Django, SQLite, and PythonAnywhere, providing structured content management and search for AI and data science articles.',
      },
    ],
  },
  {
    id: 'technologies-and-tools',
    question: 'What technologies and tools do you work with, and how do you apply them in your projects?',
    answer:
      "I work primarily in Python, using Scikit-learn, PyTorch, and XGBoost to build machine learning models, and OpenCV and MediaPipe for computer vision pipelines. For generative AI, I build LLM applications with the OpenAI API and open-source models like Llama and Mistral (via Groq and Ollama), using LangChain to orchestrate retrieval-augmented generation workflows, as in my RAG-based resume analysis system. I expose these models through FastAPI services and deploy them on Render, Streamlit Cloud, and Vercel, so each project goes from experiment to a live, usable application.",
  },
  {
    id: 'approach-to-learning',
    question: 'How do you approach learning new technologies and solving unfamiliar technical problems?',
    answer:
      "I follow a build-first, derive-from-scratch methodology. When mastering algorithms, I build interactive visual platforms—such as my Boosting Lab, Regression Lab, and Classification Lab—deriving the mathematical formulations and implementing interactive visualizations to inspect model behavior. When tackling unfamiliar frameworks or libraries, I dive into the documentation, build a minimal isolated prototype to identify failure modes, and iterate toward a production-grade solution. This systematic approach allows me to adapt quickly to emerging tools in the rapidly evolving AI landscape.",
  },
];
