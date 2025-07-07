import { blogs } from "@/assets/blogData";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const categories = [...new Set(blogs.flatMap((blog) => blog.tags))];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold gradient-text mb-6">Blog</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing my thoughts, experiences, and learnings about frontend
            development, web technologies, and the ever-evolving world of
            software development.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden card-hover animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/${blog.image}?w=400&h=200&fit=crop`}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                    {blog.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock size={16} className="mr-1" />
                    {blog.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-violet-500/10 text-violet-400 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <Link
                    href={`/blog/${blog.title}`}
                    className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center bg-gray-800/50 p-12 rounded-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest articles and insights
            about frontend development directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
            <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white border-none">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
