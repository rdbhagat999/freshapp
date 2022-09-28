import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <div class="min-h-screen mx-auto max-w-screen-xl">
        <Header />
        <main class="px-5">
          <Component />
        </main>
        <Footer />
      </div>
    </>
  );
}
