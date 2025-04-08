import { Post } from "@/components/blog-post";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await fetch(`https://api.vercel.app/blog/${params.id}`);
  const post: Post[] = await data.json();

  return Response.json({ post });
}
