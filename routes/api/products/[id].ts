import { Handlers } from "$fresh/server.ts";

import { IProduct } from "../../../utils/types.ts";
import { API_ROOT, DB, TOKEN } from "../../../utils/env.ts";

export const handler: Handlers = {
  async GET(_req, ctx): Promise<Response> {
    const items = `products`;

    const { id } = ctx.params;

    const api_url = `${API_ROOT}/items/${items}/${id}?access_token=${TOKEN}`;

    const headers = {
      "Content-Type": "application/json",
      "X-Custom-Header": "Ramandeep Bhagat",
    };

    const resp: Response = await fetch(`${api_url}`);
    console.log(resp.ok);

    const resBody = await resp.json();
    console.log(resBody);

    if (!resp.ok) {
      const jsonResp = JSON.stringify({
        message: resBody["errors"][0]["message"],
      });

      return new Response(jsonResp, {
        headers,
        status: resp.status,
        statusText: resp.statusText,
      });
    }

    const product: IProduct = resBody?.data && {
      ...resBody.data,
      thumbnail:
        `https://${DB}.directus.app/assets/${resBody.data.thumbnail}?access_token=${TOKEN}`,
    };

    const jsonResp = JSON.stringify(product);

    return new Response(jsonResp, {
      headers,
    });
  },
};
