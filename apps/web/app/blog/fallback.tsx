import BlogPost from "./post";

export default async function BlogPostFallback() {
  return (
    <>
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </>
  );
}
