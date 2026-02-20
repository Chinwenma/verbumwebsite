"use client";

import { FC } from "react";
import BlogCard from "./BlogCard"; // adjust the path
import { blogs } from "@/lib/blog";
import PageBanner from "../../components/pagebanner/PageBanner";

const BlogPage: FC = () => {
  return (
    <>
      <PageBanner
        title="Blog Posts"
        subtitle="Learn more about our mission and values"
        backgroundImage="/assets/a1fiy-v6plo.avif"
      />{" "}
      <section className="w-full p-12 flex flex-col items-center gap-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          {blogs.map((post, i) => (
            <BlogCard key={post.id} {...post} index={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
