"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();

  const id = params.id as string;

  const { data, isLoading } = useQuery({
    queryKey: [`single-blog-post-${id}`],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${id}`);
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <article className="w-full">
        <div className="animate-pulse h-8 w-full md:w-84 bg-accent rounded-md"></div>
        <div className="animate-pulse h-6 mt-5 w-full md:w-128 bg-accent rounded-md"></div>
      </article>
    );
  }

  return (
    <div className="mx-auto w-full">
      <h2 className="text-2xl font-semibold tracking-tight text-pretty sm:text-3xl">
        {data.post.title}
      </h2>
      <p className="mt-2 text-lg/8 ">{data.post.content}</p>
    </div>
  );
}
