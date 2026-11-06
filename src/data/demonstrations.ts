export interface DemonstrationItem {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

export const demonstrations: DemonstrationItem[] = [
  {
    id: 'mealmate-demo',
    title: 'MealMate Demo',
    description: 'Video demonstration for our MealMate project.',
    date: 'October 2024',
    url: 'https://youtube.com',
  },
  {
    id: 'linear-regression-demo',
    title: 'Linear Regression Lab Demo',
    description: 'Interactive demonstration of regression algorithms and live plots.',
    date: 'June 2024',
    url: 'https://youtube.com',
  },
  {
    id: 'classification-demo',
    title: 'Classification Lab Demo',
    description: 'Demonstration of classification model comparisons and decision boundaries.',
    date: 'June 2024',
    url: 'https://youtube.com',
  },
  {
    id: 'hired-demo',
    title: 'HireD Platform Demo',
    description: 'Demonstration of web admin panel and driver mobile workflow.',
    date: 'October 2024',
    url: 'https://youtube.com',
  },
];
