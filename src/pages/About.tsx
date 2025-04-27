import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const skills = [
  {
    category: "Languages",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Vue.js", "Redux/Zustand"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Styled Components", "SCSS/SASS", "CSS Modules"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Webpack/Vite", "Vercel/Netlify"],
  },
  {
    category: "Design",
    items: ["Figma", "Responsive Design", "Accessibility", "UI/UX Principles"],
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company: "Ayata Inc.",
    period: "May 2024 - Present",
    description:
      "Developing responsive web applications using React and TypeScript. Working with a team of designers and backend developers to implement user interfaces according to design specifications.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Ayata Studio",
    period: "Feb 2024 - May 2024",
    description:
      "Assisted in building and maintaining client websites. Implemented responsive designs and improved site performance.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const About = () => {
  return (
    <div className="container px-4 md:px-6 py-12 animate-fade-in">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            About Me
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Passionate frontend developer with a focus on creating beautiful,
            functional user experiences.
          </p>
        </section>

        {/* Personal Story */}
        <section className="grid gap-8 md:grid-cols-[2fr_1fr] items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-display">My Journey</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Hello! I'm Suyog Luitel, a frontend developer with over a year
                of professional experience. My journey into web development
                began when I discovered my passion for creating visually
                appealing and functional websites that solve real-world
                problems.
              </p>
              <p>
                After completing my degree in Computer Application, I focused on
                honing my frontend skills through continuous learning and
                practical projects. I'm particularly interested in the
                intersection of design and development.
              </p>
              <p>
                What excites me most about frontend development is the ability
                to bring ideas to life and create experiences that users
                genuinely enjoy. I'm constantly learning new technologies and
                approaches to stay at the forefront of the industry.
              </p>
            </div>
            <div className="pt-2">
              <Button className="mt-2 mr-2">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border/50 aspect-square">
            <div className="w-full h-full bg-secondary/60 flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Profile Image</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-display">
            Skills & Expertise
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-card p-5 rounded-lg border border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-medium text-lg mb-3">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-display">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-xl">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 md:mt-0">
                    {exp.period}
                  </p>
                </div>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-display">Education</h2>
          <div className="bg-card p-6 rounded-lg border border-border/50 animate-slide-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="font-medium text-xl">
                  Bachelor in Computer Applications
                </h3>
                <p className="text-muted-foreground">Tribhuvan University</p>
              </div>
              <p className="text-sm text-muted-foreground mt-1 md:mt-0">
                2020 - 2024
              </p>
            </div>
            <p>
              Graduated with honors. Focused on web technologies and user
              interface design.
            </p>
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-secondary/40 p-8 rounded-lg text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 font-display">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground mb-4">
            Check out my projects or get in touch to discuss how we can
            collaborate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
