import { BlogPostSkeleton } from "@/components/blog-post";

export default function BlogPageLoading() {
  return (
    <div className="mx-auto w-full">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        From the blog
      </h2>
      <p className="mt-2 text-lg/8 ">
        This page is using React Server Components (RSC) and is loading data on
        the server.
      </p>
      <div className="mt-12 grid w-full grid-cols-1 gap-x-6 gap-y-12 border-t pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogPostSkeleton />
        <BlogPostSkeleton />
        <BlogPostSkeleton />
      </div>
    </div>
  );
}
