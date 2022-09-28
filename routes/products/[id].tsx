import { Handlers, PageProps } from "$fresh/server.ts";
import { API_ROOT, DB, TOKEN } from "../../utils/env.ts";
import { IProduct } from "../../utils/types.ts";

import HeadElement from "../../components/HeadElement.tsx";

export const handler: Handlers<IProduct | null> = {
  async GET(_req, ctx) {
    const { id } = ctx.params;

    const reqUrl = `${API_ROOT}/items/products/${id}?access_token=${TOKEN}`;

    const resp: Response = await fetch(`${reqUrl}`);

    const resBody = await resp.json();

    if (!resp.ok) {
      console.log(resp.ok);
      console.log(resBody);
      // return ctx.render(null);
      /* displays _404 not found page */
      return ctx.renderNotFound();
    }

    const product: IProduct = resBody?.data && {
      ...resBody.data,
      thumbnail:
        `https://${DB}.directus.app/assets/${resBody.data.thumbnail}?access_token=${TOKEN}`,
    };

    return ctx.render(product);
  },
};

export default function GithubPage({ data, url }: PageProps<IProduct | null>) {
  if (!data) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      <HeadElement
        url={url}
        title={data.name}
        description={data.description}
        image={data.thumbnail}
      />
      <article class="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <img
          src={`${data?.thumbnail}`}
          alt={data?.name}
          class="w-full"
        />
        <section>
          <h1 class="text-5xl font-bold">{data?.name}</h1>
          <p class="text-3xl font-italic mt-5">
            {data?.description}
          </p>

          <ul class="grid grid-cols-2 mt-5 mb-5 text-3xl">
            {[
              "price",
              "quantity",
              "sku",
              "status",
              "type",
              "vendor",
            ].map((stat) => (
              <li key={stat} class="mt-3">
                <p class="font-bold">{stat}</p>
                <p>
                  {stat == "price"
                    ? "$" + data[stat as keyof IProduct]
                    : data[stat as keyof IProduct]}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
