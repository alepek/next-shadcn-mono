import { Post } from "@/components/blog-post";

export async function GET() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: Post[] = await data.json();

  return Response.json({ posts });
}
