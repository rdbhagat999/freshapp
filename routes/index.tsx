import { Handlers, PageProps } from "$fresh/server.ts";
import { IProduct } from "../utils/types.ts";
import { API_ROOT, DB, TOKEN } from "../utils/env.ts";
import HeadElement from "../components/HeadElement.tsx";
import SearchForm from "../components/SearchForm.tsx";
import ProductCard from "../components/Product.tsx";
import site from "../utils/site.ts";

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

    const reqUrl =
      `${API_ROOT}/items/products?access_token=${TOKEN}&q=${query}&page=${page}&offset=${offset}&limit=${limit}${filter}`;

    const resp: Response = await fetch(`${reqUrl}`);

    const resBody = await resp.json();

    if (!resp.ok) {
      console.log(resp.ok);
      console.log(resBody);

      return ctx.render({
        products: null,
        query,
      });

      /* displays _404 not found page */
      // return ctx.renderNotFound();
    }

    const products: IProduct[] = resBody?.data &&
        resBody.data.map((p: IProduct) => ({
          ...p,
          thumbnail:
            `https://${DB}.directus.app/assets/${p.thumbnail}?access_token=${TOKEN}`,
        })) || [];

    return ctx.render({
      products,
      query,
    });
  },
};
export default function Home(
  { data, url }: PageProps<{
    products: IProduct[];
    query: string;
  }>,
) {
  const { products, query } = data;

  return (
    <section>
      <HeadElement
        url={url}
        title={site.title}
        description={site.description}
        image={site.ogImage}
      />
      <SearchForm query={query} />

      <ul class="grid sm:grid-cols-2 md:grid-cols-3 mt-5 gap-2">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} showImg={false} />
            </li>
          ))}
      </ul>
    </section>
  );
}
