import { Post } from "@/components/blog-post";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await fetch(`https://api.vercel.app/blog/${id}`);
  const post: Post[] = await data.json();

  return Response.json({ post });
}
