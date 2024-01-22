
interface DevelopmentStep {
  title: string;
  date: string;
}

interface ProjectType {
  id: string;
  title: string;
  images: string[];
  github: string;
  url: string;
  techStack: string[];
  story: string;
  roles: string[];
  developmentSteps?: DevelopmentStep[];
}

interface ProjectList {
  id: string;
  imageUrl: string;
  title: string;
  skillsIcon?: string;
  skillsIconText?: string;
  intro?:string;
}