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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TZX2VZ7HHS"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TZX2VZ7HHS');
          `,
          }}
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
