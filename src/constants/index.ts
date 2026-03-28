import {
  NavLink,
  Service,
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

export const services: Service[] = [
  { title: "Web Developer", icon: "https://picsum.photos/seed/web/200/200" },
  { title: "React Native Developer", icon: "https://picsum.photos/seed/mobile/200/200" },
  { title: "Backend Developer", icon: "https://picsum.photos/seed/backend/200/200" },
  { title: "Content Creator", icon: "https://picsum.photos/seed/creator/200/200" },
];

export const technologies: Technology[] = [
  { name: "HTML 5", icon: "https://picsum.photos/seed/html/100/100" },
  { name: "CSS 3", icon: "https://picsum.photos/seed/css/100/100" },
  { name: "JavaScript", icon: "https://picsum.photos/seed/js/100/100" },
  { name: "TypeScript", icon: "https://picsum.photos/seed/ts/100/100" },
  { name: "React JS", icon: "https://picsum.photos/seed/react/100/100" },
  { name: "Redux Toolkit", icon: "https://picsum.photos/seed/redux/100/100" },
  { name: "Tailwind CSS", icon: "https://picsum.photos/seed/tailwind/100/100" },
  { name: "Node JS", icon: "https://picsum.photos/seed/node/100/100" },
  { name: "MongoDB", icon: "https://picsum.photos/seed/mongodb/100/100" },
  { name: "Three JS", icon: "https://picsum.photos/seed/threejs/100/100" },
  { name: "git", icon: "https://picsum.photos/seed/git/100/100" },
  { name: "figma", icon: "https://picsum.photos/seed/figma/100/100" },
  { name: "docker", icon: "https://picsum.photos/seed/docker/100/100" },
];

export const experiences: Experience[] = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: "https://picsum.photos/seed/starbucks/100/100",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: "https://picsum.photos/seed/tesla/100/100",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: "https://picsum.photos/seed/shopify/100/100",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: "https://picsum.photos/seed/meta/100/100",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and rent cars from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "https://picsum.photos/seed/carrent/600/400",
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: "https://picsum.photos/seed/jobit/600/400",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "https://picsum.photos/seed/tripguide/600/400",
    source_code_link: "https://github.com/",
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
