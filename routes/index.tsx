import { Handlers, PageProps } from "$fresh/server.ts";
import { IProduct } from "../utils/types.ts";
import ProductCard from "../components/Product.tsx";

import { APP_ROOT } from "../utils/env.ts";

export const handler: Handlers<{
  products: IProduct[] | null;
  query: string;
}> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const page = url.searchParams.get("page") || "1";
    const limit = "15";
    const filter = query.length
      ? `&filter[name][_contains]=${encodeURIComponent(query)}`
      : "";

    const offset = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    const isLocalhost = url.origin.includes("localhost");

    const appOrigin = isLocalhost ? url.origin : APP_ROOT;

    const reqUrl =
      `${appOrigin}/api/products?page=${page}&offset=${offset}&limit=${limit}&filter=${filter}`;

    const resp = await fetch(reqUrl);

    if (resp.status === 404) {
      return ctx.render({
        products: null,
        query,
      });

      /* displays _404 not found page */
      // return ctx.renderNotFound();
    }

    const products: IProduct[] = await resp.json();

    if (!products) {
      return new Response("Product search failed", { status: 404 });
    }

    return ctx.render({
      products,
      query,
    });
  },
};
export default function Home(
  { data }: PageProps<{
    products: IProduct[];
    query: string;
  }>,
) {
  const { products, query } = data;

  return (
    <div class="mx-auto max-w-screen-xl">
      {
        /* <form class="flex w-full gap-2">
        <input
          type="text"
          name="q"
          value={query}
          class="flex-grow w-full shadow-sm focus:ring-indigo-800 focus:border-indigo-800 block sm:text-lg border-1 rounded-md p-3"
        />

        <button
          type="submit"
          class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-10"
        >
          Search
        </button>
      </form> */
      }

      <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-5 gap-2">
        {products && products.map((product) => (
          // <div key={product.id}>{products?.name}</div>
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
