import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang='id' className={`scroll-smooth`}>
      <Head>
        {/* favicon */}
        <link rel='shortcut icon' href='/logo.png' />
      </Head>
      <body suppressHydrationWarning>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
