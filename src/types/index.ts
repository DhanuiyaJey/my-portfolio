export interface NavLink {
  id: string;
  title: string;
}

export interface Service {
  title: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
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

export interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  link: string;
}
