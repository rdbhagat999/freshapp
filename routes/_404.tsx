import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <div class="grid sm:grid-cols-1 md:grid-cols-1 mt-5 gap-2">
      <h1 class="text-center font-semibold text-4xl">
        Error - 404 not found
      </h1>
      <p class="text-center">{url.pathname}</p>
      <a class="text-center font-semibold text-blue-500 text-2xl" href="/">
        Goto Home
      </a>
    </div>
  );
}
