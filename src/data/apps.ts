import type { AppEntry } from '../types/app';

export const apps: AppEntry[] = [
  {
    id: 'svg-editor',
    name: 'SVG Editor',
    description: 'A browser-based SVG editor for creating and editing vector graphics.',
    repoUrl: 'https://github.com/ThaminduR/svg-editor',
    liveUrl: 'https://ThaminduR.github.io/svg-editor',
    tags: ['typescript', 'svg', 'editor'],
  },
  {
    id: 'spark-privacy-preserver',
    name: 'Spark Privacy Preserver',
    description: 'Anonymizing library for Apache Spark supporting k-anonymity, l-diversity, t-closeness, and differential privacy.',
    repoUrl: 'https://github.com/ThaminduR/spark-privacy-preserver',
    liveUrl: 'https://github.com/ThaminduR/spark-privacy-preserver',
    tags: ['python', 'spark', 'privacy', 'anonymization'],
  },
];
