import { Suspense } from "react";
import BlogPosts from "./posts";
import BlogPostFallback from "./fallback";

export default function BlogPage() {
  return (
    <div className="mx-auto w-full">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        From the blog
      </h2>
      <p className="mt-2 text-lg/8 ">
        Learn how to grow your business with our expert advice.
      </p>
      <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-12 border-t pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <Suspense fallback={<BlogPostFallback />}>
          <BlogPosts />
        </Suspense>
      </div>
    </div>
  );
}
