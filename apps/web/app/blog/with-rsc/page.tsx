import { Heading } from "./heading";
import BlogPosts from "./posts";

export default function BlogPage() {
  return (
    <div className="mx-auto w-full">
      <Heading />
      <div className="mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-12 border-t pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogPosts />
      </div>
    </div>
  );
}
