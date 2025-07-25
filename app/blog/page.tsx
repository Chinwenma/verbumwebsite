"use client";

import { FC } from "react";
import BlogCard from "./BlogCard"; // adjust the path
import { blogs } from "@/lib/blog";
import PageBanner from "../components/pagebanner/PageBanner";

const BlogPage: FC = () => {
  return (
    <div>
      <PageBanner 
       title="Blog Posts"
        subtitle="Learn more about our mission and values"
        backgroundImage="/assets/a1fiy-v6plo.avif"
      />{" "}
      <section className="w-full py-12 px-4 flex flex-col items-center gap-10">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 text-center">
          All Blog Posts
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
          {blogs.map((post, i) => (
            <BlogCard key={post.id} {...post} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
