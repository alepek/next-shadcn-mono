import { BlogPostSkeleton } from "@/components/blog-post";

export default function BlogPageLoading() {
  return (
    <div className="mx-auto w-full">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        <div className="animate-pulse h-10 mt-2 w-64 bg-accent rounded-md"></div>
      </h2>
      <p className="mt-2 mb-6 text-lg/8 ">
        <span className="animate-pulse h-4 mt-4 w-64 bg-accent rounded-md"></span>
      </p>
      <div className="mt-12 grid w-full grid-cols-1 gap-x-6 gap-y-12 border-t pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogPostSkeleton />
        <BlogPostSkeleton />
        <BlogPostSkeleton />
      </div>
    </div>
  );
}
