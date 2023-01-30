import About from "components/parts/home/about";
import Additionals from "components/parts/home/additionals";
import Contact from "components/parts/home/contact";
import Destinations from "components/parts/home/destinations";
import Fab from "components/fab";
import Faq from "components/parts/home/faq";
import Hero from "components/parts/home/hero";
import Trip from "components/parts/home/trips";
import Footer from "layouts/footer";
import HeadComponent from "components/parts/common/head";

export default function Home() {
  return (
    <>
      <HeadComponent
        title="VW Wisata Borobudur - Trip bareng keluarga"
        description="Jangan lewatkan pengalaman menjelajahi keindahan dan budaya di sekitar Borobudur dengan cara yang menyenangkan bersama VW Wisata Borobudur. Rencanakan perjalanan impianmu sekarang!"
      />

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
