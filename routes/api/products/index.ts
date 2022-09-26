import { Handlers } from "$fresh/server.ts";

import { IProduct } from "../../../utils/types.ts";
import { DB, TOKEN } from "../../../utils/env.ts";

const api_root = `https://${DB}.directus.app/items`;

export const handler: Handlers<IProduct[] | null> = {
  async GET(req, _ctx) {
    const items = `products`;

    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const limit = url.searchParams.get("limit") || "15";
    const offset = url.searchParams.get("offset") || "0";
    const filter = url.searchParams.get("filter") || "";

    const api_url =
      `${api_root}/${items}?access_token=${TOKEN}&q=${query}&offset=${offset}&limit=${limit}&filter=${filter}`;

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

    const products = resBody.data.map((p: IProduct) => ({
      ...p,
      thumbnail:
        `https://${DB}.directus.app/assets/${p.thumbnail}?access_token=${TOKEN}`,
    }));

    jsonResp = JSON.stringify(products);

    return new Response(jsonResp, {
      headers,
    });
  },
};
