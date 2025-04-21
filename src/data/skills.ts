import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'skills.languages',
    skills: [
      { name: 'Python', icon: 'logos:python' },
      { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Rust (in progress)', icon: 'logos:rust' }
    ]
  },
  {
    name: 'skills.aidata',
    skills: [
      { name: 'PyTorch', icon: 'logos:pytorch-icon' },
      { name: 'Spark', icon: 'logos:apache-spark' },
      { name: 'Airflow', icon: 'logos:airflow' },
      { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
      { name: 'ClearML', icon: 'simple-icons:clear' },
      { name: 'DVC', icon: 'simple-icons:dvc' }
    ]
  },
  {
    name: 'skills.web',
    skills: [
      { name: 'FastAPI', icon: 'simple-icons:fastapi' },
      { name: 'Svelte', icon: 'logos:svelte-icon' },
      { name: 'Prometheus', icon: 'logos:prometheus' },
      { name: 'Grafana', icon: 'logos:grafana' }
    ]
  },
  {
    name: 'skills.tools',
    skills: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'logos:github-icon' },
      { name: 'UV', icon: 'simple-icons:uv' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'Azure', icon: 'logos:microsoft-azure' },
      { name: 'GCP', icon: 'logos:google-cloud' }
    ]
  }
];