import About from "@/components/home/About";
import BlogSection from "@/components/home/BlogSection";
import ContactCTA from "@/components/home/ContactCTA";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <About />
      <FeaturedProjects />
      <BlogSection />
      <ContactCTA />
    </div>
  );
};

export default Home;
