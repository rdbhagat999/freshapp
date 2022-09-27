import { Handlers, PageProps } from "$fresh/server.ts";

import { IProduct } from "../../utils/types.ts";

import { APP_ROOT } from "../../utils/env.ts";

export const handler: Handlers<IProduct | null> = {
  async GET(req, ctx) {
    const url = new URL(req.url);

    const { id } = ctx.params;

    const isLocalhost = url.origin.includes("localhost");

    const appOrigin = isLocalhost ? url.origin : APP_ROOT;

    const reqUrl = `${appOrigin}/api/products/${id}`;

    const product: IProduct = await fetch(reqUrl).then((res) => res.json());

    if (!product) {
      return new Response("Product not found", { status: 404 });
    }

    return ctx.render(product);
  },
};

export default function GithubPage({ data }: PageProps<IProduct | null>) {
  if (!data) {
    return <h1>Product not found</h1>;
  }

  return (
    <div class="mx-auto max-w-screen-xl">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <img
          src={`${data?.thumbnail}`}
          class="w-full"
        />
        <div>
          <div class="text-5xl font-bold mt-3">{data?.name}</div>
          <div class="text-3xl font-italic mt-5">
            {data?.description}
          </div>

          <div class="grid grid-cols-2 mt-5 text-3xl">
            {[
              "price",
              "quantity",
              "sku",
              "status",
              "type",
              "vendor",
            ].map((stat) => (
              <div key={stat} class="mt-3">
                <div class="font-bold">{stat}</div>
                <div>{data[stat as keyof IProduct]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
