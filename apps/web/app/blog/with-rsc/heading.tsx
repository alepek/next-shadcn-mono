export function Heading() {
  return (
    <>
      <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        From the RSC blog
      </h2>
      <p className="mt-2 text-lg/8 ">
        This page is using React Server Components (RSC) and is loading data on
        the server. It has no caching.
      </p>
    </>
  );
}
