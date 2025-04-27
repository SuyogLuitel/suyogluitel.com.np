import avyaas from "../assets/avyaas.png";
import ams from "../assets/ams.png";
import zunun from "../assets/zunun.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
}

export const ProjectData: Project[] = [
  {
    id: 1,
    title: "Avyaas | Online Learning Platform",
    description:
      "Avyaas is an online exam preparation application. It has courses from medical entrance preparation to post-graduate entrance preparation.",
    image: avyaas,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://unentrance.com/",
    githubUrl: "",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Attendance Management System",
    description:
      "A cloud-based, AI-powered Attendance Management System for businesses of all sizes.",
    image: ams,
    tags: ["React", "React Query", "Tailwind CSS"],
    liveUrl: "https://ams.ayata.com.np/",
    githubUrl: "",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Zunun - Online School Management",
    description:
      "Zunun is web based application based on Guatemala which manages school online with features such as online class, quiz, assigmnment submission, interactive discussion, etc.",
    image: zunun,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    isFeatured: true,
  },
];
