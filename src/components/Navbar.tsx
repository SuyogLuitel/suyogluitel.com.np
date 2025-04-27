import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "w-full fixed top-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-4 glass border-b border-border/40"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          to={"/"}
          className="text-xl font-medium font-display transition-opacity hover:opacity-80"
        >
          Suyog.Luitel
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems?.map((link, index) => (
            <Link
              key={index}
              to={link?.path}
              className={cn(
                "text-sm font-medium transition-all duration-200 hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link?.label}
            </Link>
          ))}

          <ThemeToggle />
        </nav>

        {/* mobile menu button */}
        <div className="flex md:hidden items-center">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2 p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* mobile nav menus */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-5 px-6 glass mt-2 mx-4 rounded-2xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-base py-2 font-medium transition-all duration-200",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
