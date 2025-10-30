export interface TechStack {
  _id: string;
  name: string;
  slug: string;
  logo: string;
}

export interface Experience {
  _id: string;
  company_name: string;
  role: string;
  linkedin: string | null;
  website: string | null;
  startDate: Date;
  endDate: Date | null;
  location: string | "Remote";
  isCurrent: boolean;
  description: string[];
  techStack: TechStack[];
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  projectUrl: string | null;
  repoUrl: string | null;
  status: "Completed" | "In Progress" | "On Hold" | "Archived";
  techStack: TechStack[];
}

export interface BlogPost {
  node: {
    title: string;
    brief: string;
    url: string;
    slug: string;
    publishedAt: string;
    readTimeInMinutes: number;
    coverImage: {
      url: string;
    };
  };
}