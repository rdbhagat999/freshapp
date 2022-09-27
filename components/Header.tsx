import site from "../utils/site.ts";

export default function Header() {
  return (
    <div class="p-5 bg-blue-500 text-white mb-5 flex">
      <a href="/" class="flex-grow font-bold">
        <h1 class="text-4xl">{site.title}</h1>
      </a>
      <a href="https://fresh.deno.dev">
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
        />
      </a>
    </div>
  );
}
