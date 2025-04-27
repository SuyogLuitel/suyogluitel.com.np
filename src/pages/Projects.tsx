import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard, Project } from "@/components/ProjectCard";

// Sample data
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
  {
    id: 4,
    title: "Fitness Tracking Mobile App",
    description:
      "A cross-platform mobile application for tracking workouts and health metrics with personalized recommendations.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React Native", "Redux", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Real Estate Listing Platform",
    description:
      "A platform connecting property owners and potential buyers with advanced filtering and search capabilities.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["Vue.js", "Vuex", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Social Media Analytics Dashboard",
    description:
      "A comprehensive dashboard for tracking social media performance across multiple platforms with data visualization.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "D3.js", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

// Get unique tags from all projects
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => selectedTags.includes(tag))
        );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container px-4 md:px-6 py-12 animate-fade-in">
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            My Projects
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A collection of my work showcasing my skills and experience
          </p>
        </section>

        {/* Filter Tags */}
        <section>
          <Card className="border border-border/50">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                {selectedTags.length > 0 && (
                  <button
                    onClick={() => setSelectedTags([])}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Grid */}
        <section>
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found with the selected filters.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Projects;
