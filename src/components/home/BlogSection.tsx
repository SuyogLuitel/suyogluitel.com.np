import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { BlogCard, BlogPost } from "../BlogCard";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "How to Build a Responsive Website with Tailwind CSS",
    excerpt:
      "Learn how to create a fully responsive website using Tailwind CSS with practical examples and best practices.",
    date: "June 15, 2023",
    readTime: "5",
    category: "CSS",
    slug: "how-to-build-responsive-website-tailwind",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: 2,
    title: "Understanding React Hooks: A Deep Dive",
    excerpt:
      "Explore the power of React Hooks and how they can simplify your functional components.",
    date: "May 22, 2023",
    readTime: "7",
    category: "React",
    slug: "understanding-react-hooks",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter font-display">
              Latest Articles
            </h2>
            <p className="text-muted-foreground mt-2">
              Thoughts and insights on web development
            </p>
          </div>
          <Button asChild variant="link" className="mt-4 md:mt-0">
            <Link to="/blog" className="flex items-center">
              Read all articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
