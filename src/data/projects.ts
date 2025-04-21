import type { WorkProject } from '../types';

export const projects: WorkProject[] = [
  {
    id: 'portfolio',
    title: 'works.portfolio.title',
    description: 'works.portfolio.description',
    image: '/images/works/portfolio.jpg',
    icon: 'mdi:web',
    githubUrl: 'https://github.com/shomiyagi/portfolio',
  },
  {
    id: 'yolo-llama',
    title: 'works.yolo.title',
    description: 'works.yolo.description',
    image: '/images/works/yolo-llama.jpg',
    icon: 'mdi:brain',
    githubUrl: 'https://github.com/shomiyagi/yolo-llama',
  },
  {
    id: 'conv2doc',
    title: 'works.conv2doc.title',
    description: 'works.conv2doc.description',
    image: '/images/works/conv2doc.jpg',
    icon: 'mdi:file-document',
    githubUrl: 'https://github.com/shomiyagi/conv2doc',
  },
  {
    id: 'data-science',
    title: 'works.datascience.title',
    description: 'works.datascience.description',
    image: '/images/works/data-science.jpg',
    icon: 'mdi:chart-box',
    githubUrl: 'https://github.com/shomiyagi/data-science',
  },
];