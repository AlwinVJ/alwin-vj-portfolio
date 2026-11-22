export interface DocumentationItem {
  id: string;
  title: string;
  topics: string;
  url: string;
  date?: string;
}

export const documentationList: DocumentationItem[] = [
  {
    id: 'boosting-lab',
    title: 'Boosting Lab',
    topics:
      'AdaBoost, Gradient Boosting, XGBoost, LightGBM, Weak Learners, Learning Rate, Sequential Ensemble Learning',
    url: 'https://alwinvj.github.io/Boosting-Lab/',
  },
  {
    id: 'classification-lab',
    title: 'Classification Lab',
    topics:
      'Logistic Regression, K-Nearest Neighbors (KNN), Decision Trees, Support Vector Machines (SVM), Classification Metrics, ROC-AUC, Confusion Matrix',
    url: 'https://alwinvj.github.io/Classification_Lab/',
  },
  {
    id: 'regression-lab',
    title: 'Regression Lab',
    topics:
      'Linear Regression, Polynomial Regression, Ridge Regression, Lasso Regression, Loss Functions, Gradient Descent, Regularization',
    url: 'https://alwinvj.github.io/Linear_Regression_Lab/',
  },
  {
    id: 'dsa-python',
    title: 'DSA with Python',
    topics:
      'Arrays, Linked Lists, Stacks, Queues, Hash Tables, Trees, Graphs, Sorting Algorithms, Searching Algorithms',
    url: 'https://vercel.com/alwii/interactive-python-dsa',
  },
];
