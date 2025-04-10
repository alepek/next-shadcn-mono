"use client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const trpc = useTRPC();
  const id = parseInt(params.id as string);

  const { data, isLoading } = useQuery(trpc.getPost.queryOptions(id));

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
        {data?.title}
      </h2>
      <p className="mt-2 text-lg/8 ">{data?.content}</p>
    </div>
  );
}
