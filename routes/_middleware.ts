import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  ctx.state.data = "mySpecialData";
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
