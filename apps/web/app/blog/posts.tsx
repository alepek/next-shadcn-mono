import BlogPost, { Post } from "./post";

export default async function BlogPosts() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: Post[] = await data.json();

  return posts.map((post) => <BlogPost post={post} key={post.id} />);
}
