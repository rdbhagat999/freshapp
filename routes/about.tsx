import { Handlers } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Ramandeep Bhagat");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <div class="mx-auto max-w-screen-xl">
      <Header />
      <div class="grid sm:grid-cols-1 md:grid-cols-1 mt-5 gap-2">
        <h1 class="text-center font-semibold text-4xl">
          About page
        </h1>
        <p class="text-center">This is the about page.</p>
        <a class="text-center font-semibold text-blue-500 text-2xl" href="/">
          Goto Home
        </a>
      </div>
      <Footer />
    </div>
  );
}
