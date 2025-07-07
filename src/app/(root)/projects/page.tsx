import { ProjectData } from "@/assets/projectData";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold gradient-text mb-6">My Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my work as a Frontend Developer, featuring web
            applications, management systems, and e-commerce solutions built
            with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {ProjectData.map((project, index) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="bg-gray-800/50 p-8 rounded-lg card-hover">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                      Web Application
                    </span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                      Completed
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <ul className="text-gray-300 space-y-1">
                      {project.longDescription.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">
                      Technologies Used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <Link href={project.liveUrl ?? ""} target="_blank">
                        <Button
                          variant="outline"
                          className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white cursor-pointer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    )}

                    {project.githubUrl && (
                      <Link href={project.githubUrl ?? ""} target="_blank">
                        <Button
                          variant="outline"
                          className="border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-black cursor-pointer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="bg-gray-800/50 rounded-lg overflow-hidden h-80 card-hover">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-400 mb-8">
            I&apos;m always open to discussing new opportunities and exciting
            projects.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white border-none"
          >
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
