export interface NavLink {
  id: string;
  title: string;
}

export interface Skill {
  name: string;
  category: "technical" | "interpersonal";
}

export interface Experience {
  title: string;
  company_name: string;
  iconLabel: string;
  date: string;
  points: string[];
}

export interface Collaborator {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface Project {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  live_demo_link?: string;
}
