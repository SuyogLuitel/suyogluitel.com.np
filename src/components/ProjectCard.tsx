import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const animationDelay = `animation-delay-${(index % 5) * 100}`;

  return (
    <Card
      className={`overflow-hidden border border-border/50 h-full animate-slide-up ${animationDelay}`}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1 text-xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-normal text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center hover:underline text-primary"
          >
            Live Demo
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center hover:underline text-primary"
          >
            View Code
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
