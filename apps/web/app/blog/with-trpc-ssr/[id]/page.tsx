import { caller } from "@/trpc/server-caller";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await caller.getPost(parseInt(id));

  return (
    <div className="mx-auto w-full">
      <h2 className="text-2xl font-semibold tracking-tight text-pretty sm:text-3xl">
        {post.title}
      </h2>
      <p className="mt-2 text-lg/8 ">{post.content}</p>
    </div>
  );
}
