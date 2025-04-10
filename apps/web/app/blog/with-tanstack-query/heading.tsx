export function Heading() {
  return (
    <>
      <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        From the Tanstack blog
      </h2>
      <p className="mt-2 text-lg/8 ">
        This page is using Tanstack Query and is loading data on the client, via
        trpc. It has client-side caching via tanstack.
      </p>
    </>
  );
}
