import {
  NavLink,
  Technology,
  Experience,
  Project,
  BlogPost,
} from "../types";

export const navLinks: NavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const technologies: Technology[] = [
  { name: "Java", icon: "https://picsum.photos/seed/java/100/100" },
  { name: "C", icon: "https://picsum.photos/seed/c/100/100" },
  { name: "DBMS", icon: "https://picsum.photos/seed/dbms/100/100" },
  { name: "Networking", icon: "https://picsum.photos/seed/network/100/100" },
  { name: "Web Dev", icon: "https://picsum.photos/seed/webdev/100/100" },
  { name: "MS Office", icon: "https://picsum.photos/seed/msoffice/100/100" },
];

export const experiences: Experience[] = [
  {
    title: "BICT (Reading)",
    company_name: "University of Ruhuna",
    icon: "https://picsum.photos/seed/ruhuna/100/100",
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Currently pursuing Bachelor of Information and Communication Technology.",
      "Developing a strong foundation in computer science and information technology.",
      "Engaging in various academic projects and problem-solving challenges.",
    ],
  },
  {
    title: "Diploma of IT",
    company_name: "Esoft - Hatton",
    icon: "https://picsum.photos/seed/esoft/100/100",
    iconBg: "#E6DEDD",
    date: "Jan 2019 - June 2019",
    points: [
      "Completed a comprehensive Diploma in Information Technology.",
      "Gained hands-on experience with basic IT concepts and tools.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Saga Elite Web Project",
    description:
      "A collaborative web development project showcasing advanced web technologies and design principles.",
    tags: [
      { name: "web", color: "blue-text-gradient" },
      { name: "collaboration", color: "green-text-gradient" },
    ],
    image: "https://picsum.photos/seed/saga/600/400",
    source_code_link: "https://github.com/HajithMohamed/Saga-Elite-Web-project",
  },
  {
    name: "Mini Project Java",
    description:
      "A Java-based application demonstrating core programming concepts and software development lifecycle.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "oop", color: "green-text-gradient" },
    ],
    image: "https://picsum.photos/seed/javaproject/600/400",
    source_code_link: "https://github.com/ishanairshaff/mini-project-java",
  },
  {
    name: "E-commerce Platform",
    description:
      "An e-commerce web application with features for product browsing and management.",
    tags: [
      { name: "ecommerce", color: "blue-text-gradient" },
      { name: "web", color: "green-text-gradient" },
    ],
    image: "https://picsum.photos/seed/ecommerce/600/400",
    source_code_link: "https://github.com/Dineshs737/e-commerce",
  },
  {
    name: "Database Project",
    description:
      "A group project focused on database management systems and data architecture.",
    tags: [
      { name: "dbms", color: "blue-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
    ],
    image: "https://picsum.photos/seed/database/600/400",
    source_code_link: "https://github.com/Maheesha22/Database-group-3",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Mastering Three.js in React",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    excerpt: "Learn how to integrate complex 3D scenes into your React applications using React Three Fiber.",
    image: "https://picsum.photos/seed/blog1/600/400",
    link: "#",
  },
  {
    title: "The Future of Web Animation",
    date: "Nov 05, 2025",
    readTime: "8 min read",
    excerpt: "Exploring the latest trends in web animation, from Framer Motion to GSAP and beyond.",
    image: "https://picsum.photos/seed/blog2/600/400",
    link: "#",
  },
  {
    title: "Building Scalable Microservices",
    date: "Dec 20, 2025",
    readTime: "12 min read",
    excerpt: "A deep dive into architecting robust and scalable microservices using Node.js and Docker.",
    image: "https://picsum.photos/seed/blog3/600/400",
    link: "#",
  },
];
