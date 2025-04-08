"use client";
import BlogPost, { BlogPostSkeleton, Post } from "@/components/blog-post";
import { useQuery } from "@tanstack/react-query";

export default function BlogPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["all-blog-posts"],
    queryFn: async () => {
      const response = await fetch("/api/blog");
      return response.json();
    },
  });

  return (
    <div className="mx-auto w-full">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        From the Tanstack blog
      </h2>
      <p className="mt-2 text-lg/8 ">
        This page is using Tanstack Query and is loading data on the client.
      </p>
      <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-12 border-t pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {isLoading && (
          <>
            <BlogPostSkeleton />
            <BlogPostSkeleton />
            <BlogPostSkeleton />
          </>
        )}
        {data?.posts.map((post: Post) => (
          <BlogPost basePath="/with-tanstack-query" key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
