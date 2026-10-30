export type NavSection = 'home' | 'about' | 'skills' | 'projects' | 'education' | 'activity' | 'terminal' | 'contact';

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  category: 'IoT & Embedded Systems' | 'Full-Stack Web Application' | 'AI / Machine Learning & Algorithms';
  tagColor: 'cyan' | 'blue' | 'violet';
  featured: boolean;
  summary: string;
  detailedDescription: string;
  highlights: ProjectHighlight[];
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  codeSnippet: {
    language: string;
    fileName: string;
    lines: string[];
  };
  architectureFlow: {
    step: string;
    title: string;
    desc: string;
  }[];
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Web Technologies' | 'Tools & Platforms' | 'Core Concepts';
  level: string; // e.g. 'Advanced', 'Proficient', 'Core'
  proficiencyPercent: number;
  highlight: string;
}

export interface EducationEntry {
  degree: string;
  major: string;
  institution: string;
  location: string;
  duration: string;
  status: string;
  description: string;
  coursework: string[];
  highlights: string[];
}

export interface LeetCodeStats {
  profileUrl: string;
  username: string;
  topicsMastered: { topic: string; count: number; tag: string }[];
  problemSolvingPhilosophy: string;
  badges: string[];
}

export interface DeveloperActivityData {
  githubUrl: string;
  leetcodeUrl: string;
  username: string;
  repositories: {
    name: string;
    description: string;
    language: string;
    url: string;
    topics: string[];
  }[];
}
