import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import site from "../utils/site.ts";

const CSS = `::selection {
  background-color: #000;
  color: #fff;
}
`;
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{site.title}</title>
        <meta name="title" content={site.title} />
        <meta name="description" content={site.description} />
        {/* Theme */}
        <meta name="theme-color" content="#000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={site.title} />
        <meta property="twitter:description" content={site.description} />
        <meta property="twitter:image" content={site.ogImage} />

        {/* Global Styles that couldn't be loaded through Twind */}
        <style>
          {CSS}
        </style>
      </Head>
      <div class="min-h-screen mx-auto max-w-screen-xl">
        <Header />
        <Component />
        <Footer />
      </div>
    </>
  );
}
