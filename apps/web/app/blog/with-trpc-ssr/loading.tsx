import { BlogPostSkeleton } from "@/components/blog-post";
import { Heading } from "./heading";

export default function BlogPageLoading() {
  return (
    <div className="mx-auto w-full">
      <Heading />
      <div className="mt-12 grid w-full grid-cols-1 gap-x-6 gap-y-12 border-t pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogPostSkeleton />
        <BlogPostSkeleton />
        <BlogPostSkeleton />
      </div>
    </div>
  );
}
