export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(`https://api.vercel.app/blog/${id}`, {
    // required for nextjs to not fully cache the page
    cache: "no-store",
  });
  const post = await data.json();

  return (
    <div className="mx-auto w-full">
      <h2 className="text-2xl font-semibold tracking-tight text-pretty sm:text-3xl">
        {post.title}
      </h2>
      <p className="mt-2 text-lg/8 ">{post.content}</p>
    </div>
  );
}
