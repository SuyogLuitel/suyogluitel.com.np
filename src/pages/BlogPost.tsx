import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogCard, BlogPost } from "@/components/BlogCard";
import { Separator } from "@/components/ui/separator";

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

// Sample blog content (placeholder)
const sampleContent = `
## Introduction

In this article, we'll explore how to build a responsive website using Tailwind CSS, a utility-first CSS framework that makes it easier than ever to create beautiful, responsive designs without writing custom CSS.

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework packed with classes like \`flex\`, \`pt-4\`, \`text-center\` and \`rotate-90\` that can be composed to build any design, directly in your markup. It's different from frameworks like Bootstrap or Foundation in that it doesn't provide pre-designed components.

## Getting Started

To get started with Tailwind CSS, you need to install it via npm:

\`\`\`bash
npm install tailwindcss
\`\`\`

Then, create a configuration file:

\`\`\`bash
npx tailwindcss init
\`\`\`

## Building Responsive Layouts

Tailwind makes it incredibly easy to build responsive designs with its built-in breakpoint system. Instead of writing media queries, you can use responsive utility classes:

\`\`\`html
<div class="text-center md:text-left">
  This text is centered on mobile, and left-aligned on medium screens and up.
</div>
\`\`\`

## Best Practices

When using Tailwind CSS, here are some best practices to follow:

1. **Extract components for reusability**: Use components to avoid repeating the same utility combinations.
2. **Leverage the configuration file**: Customize colors, spacing, breakpoints, and more.
3. **Use JIT mode**: The Just-in-Time mode generates styles on-demand, resulting in smaller file sizes.
4. **Don't fight the framework**: Try to work with Tailwind's defaults before customizing extensively.

## Conclusion

Tailwind CSS is a powerful tool for creating responsive websites quickly and efficiently. By understanding its utility-first approach and leveraging its responsive features, you can build beautiful, adaptive layouts with minimal effort.
`;

// Get related posts (excluding the current one)
const getRelatedPosts = (currentSlug: string, category: string) => {
  return posts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, 2);
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching the post
    setIsLoading(true);
    setTimeout(() => {
      const foundPost = posts.find((p) => p.slug === slug);
      setPost(foundPost || null);

      if (foundPost) {
        setRelatedPosts(getRelatedPosts(foundPost.slug, foundPost.category));
      }

      setIsLoading(false);
    }, 500);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="container px-4 md:px-6 py-12 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-8 w-3/4 bg-muted/50 rounded-md mx-auto animate-pulse"></div>
          <div className="h-4 w-1/2 bg-muted/50 rounded-md mx-auto mt-4 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container px-4 md:px-6 py-12 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 font-display">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="outline" className="mb-8" size="sm">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="bg-secondary px-2 py-1 rounded-full">
                {post.category}
              </span>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {post.date}
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {post.readTime} min read
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </header>

          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            {sampleContent.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold mt-8 mb-4 font-display"
                  >
                    {paragraph.substring(3)}
                  </h2>
                );
              } else if (paragraph.startsWith("```")) {
                const codeContent = paragraph
                  .split("\n")
                  .slice(1, -1)
                  .join("\n");
                return (
                  <pre
                    key={index}
                    className="bg-secondary p-4 rounded-lg overflow-x-auto my-4"
                  >
                    <code>{codeContent}</code>
                  </pre>
                );
              } else if (paragraph.startsWith("1. ")) {
                const items = paragraph
                  .split("\n")
                  .map((line) => line.substring(3));
                return (
                  <ol key={index} className="list-decimal pl-5 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                );
              } else {
                return (
                  <p key={index} className="my-4">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>

          {/* Share */}
          <div className="mt-8 flex justify-end">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
          </div>
        </article>

        {/* Author */}
        <div className="mt-12 p-6 bg-card rounded-lg border border-border/50">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-secondary/60"></div>
            <div>
              <h3 className="font-medium">Suyog Luitel</h3>
              <p className="text-sm text-muted-foreground">
                Frontend Developer with a passion for creating beautiful user
                experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 font-display">
              Related Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.id}
                  post={relatedPost}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;
