import BlogPost from "@/components/blog-post";
import { caller } from "@/trpc/server";
import { Heading } from "./heading";

export default async function BlogPagePosts() {
  const posts = await caller.listPosts();

  return (
    <div className="mx-auto w-full">
      <Heading />
      <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-12 border-t pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts?.map((post) => (
          <BlogPost basePath="/with-tanstack-query" key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
