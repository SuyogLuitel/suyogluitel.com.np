import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectData } from "@/utils/projectData";

// Get unique tags from all projects
const allTags = Array.from(new Set(ProjectData.flatMap((p) => p.tags)));

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects =
    selectedTags.length === 0
      ? ProjectData
      : ProjectData.filter((project) =>
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
