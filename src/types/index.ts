export interface WorkProject {
    id: string;
    title: string;
    description: string;
    image?: string;
    icon: string;
    githubUrl: string;
    demoUrl?: string;
  }
  
  export interface TimelineItem {
    date: string;
    content: string;
  }
  
  export interface Skill {
    name: string;
    icon: string;
  }
  
  export interface SkillCategory {
    name: string;
    skills: Skill[];
  }
  
  export interface ContributionDay {
    date: string;
    count: number;
  }