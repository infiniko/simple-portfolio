import {
  BracketsCurlyIcon,
  FileHtmlIcon,
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
    color: "#5B8FF9",
    gradient: "#5B8FF9, #A78BFA",
    entries: ["HTML", "CSS", "JavaScript", "TypeScript", "C++"],
  },
  {
    id: 2,
    title: "Frontend",
    icon: FileHtmlIcon,
    color: "#FF6BF5",
    gradient: "#FF6BF5, #FF6680",
    entries: ["React", "Next.js", "Redux", "React Query", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Backend",
    icon: HardDrivesIcon,
    color: "#FF7B54",
    gradient: "#FF7B54, #FFBE0B",
    entries: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: 4,
    title: "Cloud & Devops",
    icon: CloudCheckIcon,
    color: "#FF7B54",
    gradient: "#FF7B54, #FFBE0B",
    entries: ["AWS S3", "CI/CD", "Kubernetes", "Jenkins"],
  },
  {
    id: 5,
    title: "Tools",
    icon: ToolboxIcon,
    color: "#FF7B54",
    gradient: "#FF7B54, #FFBE0B",
    entries: ["Git", "npm", "Vite", "GraphQL"],
  },
  {
    id: 6,
    title: "Fundamentals",
    icon: DesktopTowerIcon,
    color: "#FF7B54",
    gradient: "#FF7B54, #FFBE0B",
    entries: [
      "Data Structures",
      "Algorithms",
      "Agile",
      "Performance optimization",
      "Security",
    ],
  },
];
