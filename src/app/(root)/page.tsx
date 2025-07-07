import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Code,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Users,
} from "lucide-react";
import Link from "next/link";
import { ProjectData } from "@/assets/projectData";
import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Hi, I&apos;m <span className="gradient-text">Suyog Luitel</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 mb-8 typewriter">
                Frontend Developer
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                A passionate Frontend Developer with over a year of experience
                building scalable web applications with React, Next.js, and
                modern JavaScript technologies. Currently working at Ayata
                Incorporation, creating innovative solutions and beautiful user
                experiences.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white border-none"
                >
                  <Link href="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Link href={"/resume.pdf"} target="_blank">
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </Link>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/SuyogLuitel"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/suyog-luitel-4349312a0/"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:suyogluitel235@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full animate-float"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full animate-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold gradient-text mb-6">About Me</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Frontend Developer passionate about creating exceptional digital
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg card-hover animate-scale-in text-center">
              <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Clean Code</h3>
              <p className="text-gray-300">
                Writing maintainable, scalable, and efficient code using modern
                best practices and design patterns.
              </p>
            </div>

            <div
              className="bg-gray-800/50 p-6 rounded-lg card-hover animate-scale-in text-center"
              style={{ animationDelay: "200ms" }}
            >
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Team Player</h3>
              <p className="text-gray-300">
                Collaborating effectively with cross-functional teams to deliver
                projects on time and exceed expectations.
              </p>
            </div>

            <div
              className="bg-gray-800/50 p-6 rounded-lg card-hover animate-scale-in text-center"
              style={{ animationDelay: "400ms" }}
            >
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Quality Focus
              </h3>
              <p className="text-gray-300">
                Committed to delivering high-quality solutions with attention to
                detail and user experience.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
            >
              <Link href="/about">
                Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Node.js",
              "Git",
              "WebSockets",
              "API Integration",
              "Responsive Design",
            ].map((skill, index) => (
              <div
                key={skill}
                className="bg-gray-800/50 p-6 rounded-lg text-center card-hover animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-sm font-semibold text-purple-400">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Projects Preview */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">Some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProjectData?.slice(0, 3)?.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-800/50 rounded-lg overflow-hidden card-hover animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.meta}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
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
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
