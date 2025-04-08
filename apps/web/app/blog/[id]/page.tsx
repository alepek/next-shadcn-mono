export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="mx-auto w-full">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        Post {id}
      </h2>
      <p className="mt-2 text-lg/8 ">
        Hipster ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
        venenatis enim. Donec efficitur, nunc ut fringilla facilisis, nunc nisi
        bibendum ligula, nec tincidunt enim
      </p>
    </div>
  );
}
