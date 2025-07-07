import { StaticImageData } from "next/image";

import avyaas from "./avyaas.png";
import ams from "./ams.png";
import zunun from "./zunun.png";
import cedep from "./cedep.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string[];
  meta: string;
  image: StaticImageData;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const ProjectData: Project[] = [
  {
    id: 1,
    title: "Avyaas | Online Learning Platform",
    description:
      "Avyaas is an online exam preparation application. It has courses from medical entrance preparation to post-graduate entrance preparation.",
    meta: "Interactive online learning platform with video streaming, zoom class, online exams and live classes",
    longDescription: [
      "Built an interactive online learning platform supporting video streaming, PDF viewing, and live classes via Zoom.",
      "Integrated payment gateways like eSewa and Khalti for course purchases.",
      "Implemented features for course management, live exams, and user subscriptions.",
    ],
    image: avyaas,
    tags: [
      "React",
      "Payment Gateway",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Query",
    ],
    liveUrl: "https://avyaas.com/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Attendance Management System",
    description:
      "A cloud-based, AI-powered Attendance Management System for businesses of all sizes.",
    meta: "Attendance management system with real-time tracking of timesheet, payroll and online chat",
    longDescription: [
      "Designed frontend for a system that handles employee attendance, payroll tracking, and time-off requests.",
      "Added live chat and real-time notifications using WebSocket integration.",
    ],
    image: ams,
    tags: ["React", "React Query", "Tailwind CSS", "Zustand", "Websocket"],
    liveUrl: "https://ams.ayata.com.np/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Zunun - Online School Management",
    description:
      "Zunun is web based application based on Guatemala which manages school online with features such as online class, quiz, assigmnment submission, interactive discussion, etc.",
    meta: "Comprehensive interface for school operations, including course management, assignments, and resource distribution",
    longDescription: [
      "Developed a comprehensive interface for school operations, including course management, assignments, and resource distribution",
      "Created user-friendly dashboards for admins, teachers, and students.",
    ],
    image: zunun,
    tags: ["React", "React Query", "TypeScript", "Tailwind CSS", "Zustand"],
    liveUrl: "https://admin.unentrance.com/",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Cedep Billing System",
    description:
      "Cedep Billing System is a platform which manages all the billing done in cedep institute.",
    meta: "Billing application for CEDEP Institute, handling fee tracking, invoice generation, and payment status monitoring",
    longDescription: [
      "Created the billing interface for CEDEP Institute, handling fee tracking, invoice generation, and payment status monitoring.",
    ],
    image: cedep,
    tags: ["React", "React Query", "Tailwind CSS", "Zustand"],
    liveUrl: "https://cedepnepal.avyaas.app/",
    githubUrl: "",
  },
];
