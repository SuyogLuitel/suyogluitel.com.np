import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "../ProjectCard";
import { ProjectData } from "@/utils/projectData";

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
          {ProjectData.filter((project) => project.isFeatured).map(
            (project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
