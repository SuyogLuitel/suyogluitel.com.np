import { useState } from "react";
import { BlogCard, BlogPost } from "@/components/BlogCard";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample data
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
  {
    id: 3,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt:
      "A beginner-friendly guide to TypeScript for developers already familiar with JavaScript.",
    date: "April 10, 2023",
    readTime: "6",
    category: "TypeScript",
    slug: "typescript-for-javascript-developers",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    id: 4,
    title: "The Complete Guide to CSS Grid Layout",
    excerpt:
      "Master CSS Grid Layout with this comprehensive guide covering all essential concepts and techniques.",
    date: "March 5, 2023",
    readTime: "8",
    category: "CSS",
    slug: "complete-guide-css-grid-layout",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 5,
    title: "Optimizing Web Performance: Tips and Tricks",
    excerpt:
      "Learn how to improve your website's loading speed and overall performance with these practical techniques.",
    date: "February 18, 2023",
    readTime: "5",
    category: "Performance",
    slug: "optimizing-web-performance",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

// Get unique categories
const categories = Array.from(new Set(posts.map((post) => post.category)));

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === null || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container px-4 md:px-6 py-12 animate-fade-in">
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display">Blog</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Thoughts, ideas, and insights about web development
          </p>
        </section>

        {/* Search and Filter */}
        <section className="mb-8">
          <Card className="border border-border/50">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategory === null
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category ? null : category
                        )
                      }
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Blog Posts */}
        <section>
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Blogs;
