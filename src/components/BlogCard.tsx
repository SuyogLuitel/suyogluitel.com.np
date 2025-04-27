import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
  className?: string;
}

export function BlogCard({ post, index, className }: BlogCardProps) {
  const animationDelay = `animation-delay-${(index % 5) * 100}`;

  return (
    <Card
      className={cn(
        `border border-border/50 h-full animate-slide-up ${animationDelay}`,
        className
      )}
    >
      {post.image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="font-normal text-xs">
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3 text-sm">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <span className="text-xs text-muted-foreground">
          {post.readTime} min read
        </span>
        <Link
          to={`/blog/${post.slug}`}
          className="text-sm font-medium flex items-center text-primary hover:underline"
        >
          Read More
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
