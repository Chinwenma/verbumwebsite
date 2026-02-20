"use client";

import { use } from "react";
import { blogs } from "@/lib/blog";
import BlogDetails from "../BlogDetails";
import { notFound } from "next/navigation";

export default function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const blog = blogs.find((b) => b.id === Number(id));
  if (!blog) return notFound();

  return <BlogDetails blog={blog} />;
}
