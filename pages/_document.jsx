import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css"
          crossOrigin="anonymous"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
        <Script src="/script/hs-ui.bundle.js" />
      </body>
    </Html>
  );
}
