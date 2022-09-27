import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://tixu9ix9.directus.app/"
          crossOrigin="true"
        />
        <link rel="dns-prefetch" href="https://tixu9ix9.directus.app/" />

        <link rel="stylesheet" href="/app.css" />
      </Head>
      <Component />
    </>
  );
}
