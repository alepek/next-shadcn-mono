import BlogPost from "@/components/blog-post";
import { caller } from "@/trpc/server-caller";

export default async function BlogPagePosts() {
  const posts = await caller.listPosts();

  return (
    <div className="mx-auto w-full">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        From the TRPC blog
      </h2>
      <p className="mt-2 text-lg/8 ">
        This page is using trpc and server-side rendering.
      </p>
      <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-12 border-t pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts?.map((post) => (
          <BlogPost basePath="/with-tanstack-query" key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
