import { Head } from "$fresh/runtime.ts";

export type HeadProps = {
  url: URL;
  title: string;
  description: string;
  image?: string;
};

export default function HeadElement(
  { url, title, description, image }: HeadProps,
) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Theme */}
      <meta name="theme-color" content="#000" />

      {/* Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url.href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url.hostname} />
      <meta property="twitter:url" content={url.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}
