import {
  BracketsCurlyIcon,
  FileTsxIcon,
  HardDrivesIcon,
  CloudCheckIcon,
  ToolboxIcon,
  DesktopTowerIcon,
} from "@phosphor-icons/react/dist/ssr";
export const navLinks = [
  { title: "Home", href: "/#top" },
  { title: "About me", href: "/#about" },
  { title: "Skills", href: "/#skills" },
  { title: "Projects", href: "/#projects" },
  { title: "Contact Me", href: "/#contact" },
];

export const skillSet = [
  {
    id: 1,
    icon: BracketsCurlyIcon,
    title: "Langauges",
    color: "#4C9EEB",
    entries: ["HTML", "CSS", "JavaScript", "TypeScript", "C++"],
  },
  {
    id: 2,
    title: "Frontend",
    icon: FileTsxIcon,
    color: "#A855F7",
    entries: ["React", "Next.js", "Redux", "React Query", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Backend",
    icon: HardDrivesIcon,
    color: "#22C55E",
    entries: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: 4,
    title: "Cloud & Devops",
    icon: CloudCheckIcon,
    color: "#EC4899",
    entries: ["AWS S3", "CI/CD", "Kubernetes", "Jenkins"],
  },
  {
    id: 5,
    title: "Tools",
    icon: ToolboxIcon,
    color: "#F43F5E",
    entries: ["Git", "npm", "Vite", "GraphQL", "Figma"],
  },
  {
    id: 6,
    title: "Fundamentals",
    icon: DesktopTowerIcon,
    color: "#6366F1",
    entries: [
      "Data Structures",
      "Algorithms",
      "Agile",
      "Performance optimization",
      "Security",
    ],
  },
];

export const whatIDo = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Scalable apps with React, Next.js & TypeScript from architecture to deployment.",
  },
  {
    number: "02",
    title: "Performance & State",
    description:
      "Optimizations & predictable data flows with Redux, Zustand & React Query.",
  },
  {
    number: "03",
    title: "Accessibility",
    description:
      "WCAG standards, semantic HTML & ARIA roles, so products work for everyone.",
  },
  {
    number: "04",
    title: "Mentorship & Code Review",
    description:
      "Growing juniors through pair programming and reviews focused on long-term quality.",
  },
];

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];
