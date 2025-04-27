import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 mt-16 border-t border-border/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <h3 className="font-display text-xl font-medium mb-3">
              Suyog Luitel
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Frontend developer crafting beautiful, user-friendly experiences
              with modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-medium mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SuyogLuitel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/suyog-luitel-4349312a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:suyogluitel235@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Suyog Luitel. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed & built with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
