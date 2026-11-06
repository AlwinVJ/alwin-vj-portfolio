export interface DocumentationItem {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

export const documentationList: DocumentationItem[] = [
  {
    id: 'mealmate-docs',
    title: 'MealMate Docs',
    description: 'Documentation for our MealMate project.',
    date: 'October 2024',
    url: '#',
  },
  {
    id: 'linear-regression-docs',
    title: 'Linear Regression Lab Documentation',
    description: 'Mathematical formulations, derivation notes, and loss function analysis.',
    date: 'June 2024',
    url: '#',
  },
  {
    id: 'classification-docs',
    title: 'Classification Lab Documentation',
    description: 'Metric analysis, confusion matrices, and ROC curve evaluation guide.',
    date: 'June 2024',
    url: '#',
  },
  {
    id: 'hired-docs',
    title: 'HireD Platform Documentation',
    description: 'Architecture overview, API endpoints, and schema design.',
    date: 'October 2024',
    url: '#',
  },
  {
    id: 'newsverify-docs',
    title: 'NewsVerify Documentation',
    description: 'Claim extraction pipeline and automated verification workflow.',
    date: 'September 2025',
    url: '#',
  },
];
