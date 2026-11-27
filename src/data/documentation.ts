export interface DocumentationItem {
  id: string;
  title: string;
  topics: string;
  url: string;
  date?: string;
}

export const documentationList: DocumentationItem[] = [
  {
    id: 'machine-learning-lab',
    title: 'Machine Learning Lab',
    topics:
      'Regression, Classification, Boosting, K-Means Clustering, Hierarchical Clustering, Random Forest',
    url: 'https://alwinvj.github.io/machine-learning-labs/',
  },
  {
    id: 'dsa-python',
    title: 'DSA with Python',
    topics:
      'Arrays, Linked Lists, Stacks, Queues, Hash Tables, Trees, Graphs, Sorting Algorithms, Searching Algorithms',
    url: 'https://vercel.com/alwii/interactive-python-dsa',
  },
];
