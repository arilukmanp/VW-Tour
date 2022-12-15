import About from "components/about";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>VW Wisata Borobudur - Trip bareng keluarga</title>
        <meta name="theme-color" content="#fff" />
        <meta
          name="description"
          content="Jangan lewatkan pengalaman menjelajahi keindahan dan budaya di sekitar Borobudur dengan cara yang menyenangkan bersama VW Wisata Borobudur!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <About />
      </main>
    </>
  );
}
