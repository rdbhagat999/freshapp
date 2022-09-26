import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req) {
    const uuid = crypto.randomUUID();
    const result = JSON.stringify(uuid);

    return new Response(result, {
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Header": "Ramandeep Bhagat",
      },
    });
  },
};
