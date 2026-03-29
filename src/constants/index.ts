import {
  NavLink,
  Skill,
  Experience,
  Project,
} from "../types";

export const navLinks: NavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const skills: Skill[] = [
  { name: "Java", category: "technical" },
  { name: "C", category: "technical" },
  { name: "Web Development", category: "technical" },
  { name: "DBMS", category: "technical" },
  { name: "Networking", category: "technical" },
  { name: "Microsoft Office", category: "technical" },
  { name: "Problem Solving", category: "interpersonal" },
  { name: "Teamwork", category: "interpersonal" },
  { name: "Communication", category: "interpersonal" },
  { name: "Time Management", category: "interpersonal" },
  { name: "Adaptability", category: "interpersonal" },
  { name: "Quick Learning", category: "interpersonal" },
];

export const experiences: Experience[] = [
  {
    title: "BICT (Reading)",
    company_name: "University of Ruhuna",
    iconLabel: "UoR",
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
    iconLabel: "ESoft",
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