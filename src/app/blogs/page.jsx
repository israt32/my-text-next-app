import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Small Businesses Need a Modern Website",
      slug: "modern-website-for-small-business",
      excerpt:
        "Discover how a fast, responsive website helps small businesses attract more customers and build trust.",
      author: "Israt Jahan",
      date: "2026-08-10",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: 2,
      title: "Getting Started with Next.js 15",
      slug: "getting-started-nextjs-15",
      excerpt:
        "Learn the fundamentals of layouts, routing, server components, and why Next.js is popular for modern apps.",
      author: "Israt Jahan",
      date: "2026-08-08",
      category: "Next.js",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      id: 3,
      title: "Build REST APIs with Node.js and Express",
      slug: "rest-api-node-express",
      excerpt:
        "A beginner-friendly guide to creating secure REST APIs using Express, middleware, and PostgreSQL.",
      author: "Israt Jahan",
      date: "2026-08-05",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
      id: 4,
      title: "How AI Is Changing Web Development",
      slug: "ai-changing-web-development",
      excerpt:
        "Explore practical ways developers use AI to build better products instead of replacing their skills.",
      author: "Israt Jahan",
      date: "2026-08-01",
      category: "AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>
      {
        blogs.map(blog => <div key={blog.id}>
          <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>
          <Link href={`/blogs/${blog.id}`}>show details</Link>
        </div>)
      }
    </div>
  );
};

export default BlogsPage;
             