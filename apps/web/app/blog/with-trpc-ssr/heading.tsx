export function Heading() {
  return (
    <>
      <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        From the trpc blog
      </h2>
      <p className="mt-2 text-lg/8 ">
        This page is using RSC, fetching data with trpc. It has caching using{" "}
        <a
          className="text-blue-600"
          href="https://react.dev/reference/react/cache"
        >
          react cache
        </a>
        . You can observe individual blog posts being cached during the same
        session.
      </p>
    </>
  );
}
