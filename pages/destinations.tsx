import Head from "next/head";
import Footer from "layouts/footer";
import Header from "layouts/header";
import DestinationBody from "components/parts/destination";
import Fab from "components/fab";

export default function Destinations() {
  return (
    <>
      <Head>
        <title>VW Wisata Borobudur - Destinasi</title>
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
        <Header />
        <DestinationBody />
        <Footer />
        <Fab />
      </main>
    </>
  );
}
