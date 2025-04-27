import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4 animate-slide-in">
                Frontend Developer
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-display animate-slide-up">
                Creating beautiful digital experiences
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-up animation-delay-100">
                I'm Suyog, a frontend developer passionate about crafting
                intuitive, visually stunning interfaces that users love.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-slide-up animation-delay-200">
              <Button asChild className="mr-4">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-[300px] md:h-[450px] md:w-[450px] rounded-2xl overflow-hidden animate-zoom-fade-in">
              <div className="absolute inset-1 bg-gradient-to-tr from-primary/10 via-secondary/20 to-accent/10 animate-spin-faster rounded-2xl glass"></div>
              <div className="absolute inset-4 glass animate-subtle-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
