import BlogPost, { Post } from "@/components/blog-post";

export default async function BlogPosts() {
  const data = await fetch("https://api.vercel.app/blog", {
    // required for nextjs to not fully cache the page
    cache: "no-store",
  });
  const posts: Post[] = await data.json();

  return posts.map((post) => (
    <BlogPost basePath="with-rsc" post={post} key={post.id} />
  ));
}
