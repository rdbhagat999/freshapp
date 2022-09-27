import { Handlers } from "$fresh/server.ts";

import { IProduct } from "../../../utils/types.ts";
import { DB, TOKEN } from "../../../utils/env.ts";

const api_root = `https://${DB}.directus.app/items`;

export const handler: Handlers = {
  async GET(_req, ctx): Promise<Response> {
    const items = `products`;

    const { id } = ctx.params;

    const api_url = `${api_root}/${items}/${id}?access_token=${TOKEN}`;

    const headers = {
      "Content-Type": "application/json",
      "X-Custom-Header": "Ramandeep Bhagat",
    };

    const initialData = null;

    let jsonResp = JSON.stringify(initialData);

    const resp = await fetch(`${api_url}`);

    if (resp.status == 404) {
      return new Response(jsonResp, {
        headers,
        status: 404,
        statusText: "Not Found",
      });
    }

    const resBody = await resp.json();

    const product = {
      ...resBody.data,
      thumbnail:
        `https://${DB}.directus.app/assets/${resBody.data.thumbnail}?access_token=${TOKEN}`,
    };

    jsonResp = JSON.stringify(product);

    return new Response(jsonResp, {
      headers,
    });
  },
};
