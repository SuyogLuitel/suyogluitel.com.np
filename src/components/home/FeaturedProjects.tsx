import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { ProjectCard, Project } from "../ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website Redesign",
    description:
      "A complete redesign of an online store with improved user experience and modern design principles.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description:
      "An interactive dashboard for managing tasks and projects with drag-and-drop functionality.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Next.js", "React Query", "Styled Components"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description:
      "A mobile-first application for tracking personal expenses and visualizing spending habits.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["JavaScript", "Chart.js", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter font-display">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-2">Some of my recent work</p>
          </div>
          <Button asChild variant="link" className="mt-4 md:mt-0">
            <Link to="/projects" className="flex items-center">
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
