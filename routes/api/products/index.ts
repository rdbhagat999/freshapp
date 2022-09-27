import { Handlers } from "$fresh/server.ts";

import { IProduct } from "../../../utils/types.ts";
import { API_ROOT, DB, TOKEN } from "../../../utils/env.ts";

export const handler: Handlers = {
  async GET(req, _ctx): Promise<Response> {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const limit = url.searchParams.get("limit") || "15";
    const offset = url.searchParams.get("offset") || "0";
    const filter = url.searchParams.get("filter") || "";

    const api_url =
      `${API_ROOT}/items/products?access_token=${TOKEN}&q=${query}&offset=${offset}&limit=${limit}&filter=${filter}`;

    const headers = {
      "Content-Type": "application/json",
      "X-Custom-Header": "Ramandeep Bhagat",
    };

    const initialData = null;

    let jsonResp = JSON.stringify(initialData);

    const resp: Response = await fetch(`${api_url}`);
    console.log(resp.ok);

    const resBody = await resp.json();

    if (!resp.ok) {
      console.log(resBody);

      const jsonResp = JSON.stringify({
        message: resBody["errors"][0]["message"],
      });

      return new Response(jsonResp, {
        headers,
        status: resp.status,
        statusText: resp.statusText,
      });
    }

    const products: IProduct[] = resBody?.data &&
        resBody.data.map((p: IProduct) => ({
          ...p,
          thumbnail:
            `https://${DB}.directus.app/assets/${p.thumbnail}?access_token=${TOKEN}`,
        })) || [];

    jsonResp = JSON.stringify(products);

    return new Response(jsonResp, {
      headers,
    });
  },
};
