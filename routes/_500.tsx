import { ErrorPageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <div class="mx-auto max-w-screen-xl">
      <Header />
      <div class="grid sm:grid-cols-1 md:grid-cols-1 mt-5 gap-2">
        <h1 class="text-center font-semibold text-4xl">
          500 internal server error
        </h1>
        <p class="text-center">{(error as Error).message}</p>
        {/* <p class="text-center">{(error as Error).stack}</p> */}
        <a class="text-center font-semibold text-blue-500 text-2xl" href="/">
          Goto Home
        </a>
      </div>
    </div>
  );
}
