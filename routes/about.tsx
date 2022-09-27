import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Ramandeep Bhagat");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <div class="grid sm:grid-cols-1 md:grid-cols-1 mt-5 gap-2">
      <h1 class="text-center font-semibold text-4xl">
        About page
      </h1>
      <p class="text-center">This is the about page.</p>
      <a class="text-center font-semibold text-blue-500 text-2xl" href="/">
        Goto Home
      </a>
    </div>
  );
}
