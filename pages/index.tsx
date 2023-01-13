import About from "components/parts/home/about";
import Additionals from "components/parts/home/additionals";
import Contact from "components/parts/home/contact";
import Destinations from "components/parts/home/destinations";
import Fab from "components/fab";
import Faq from "components/parts/home/faq";
import Hero from "components/parts/home/hero";
import Trip from "components/parts/home/trips";
import Footer from "layouts/footer";
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
        <Hero />
        <About />
        <Trip />
        <Destinations />
        <Additionals />
        <Contact />
        <Faq />
        <Footer />
        <Fab />
      </main>
    </>
  );
}
