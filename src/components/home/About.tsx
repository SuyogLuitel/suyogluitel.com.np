import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-4 font-display">
              About Me
            </h2>
            <p className="text-muted-foreground">
              I'm a passionate frontend developer with more than a year of
              professional experience creating responsive, user-friendly web
              applications. With a strong foundation in HTML, CSS, and
              JavaScript, I build engaging digital experiences.
            </p>
            <Button asChild variant="link" className="px-0 mt-4">
              <Link to="/about" className="flex items-center">
                Learn more about me
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border/50">
                <h3 className="font-medium mb-1">Front-end Development</h3>
                <p className="text-sm text-muted-foreground">
                  React, TypeScript, Next.js
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border/50">
                <h3 className="font-medium mb-1">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">
                  Figma, User-Centered Design
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border/50">
                <h3 className="font-medium mb-1">Modern CSS</h3>
                <p className="text-sm text-muted-foreground">
                  Tailwind CSS, SCSS, CSS-in-JS
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border/50">
                <h3 className="font-medium mb-1">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Web Vitals, Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
