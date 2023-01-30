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
import { tripData, TripInterface } from "lib/models/trip";
import {
  DestinationInterface,
  destinationsData,
} from "lib/models/destinations";
import { AdditionalInterface, additionalsData } from "lib/models/additionals";
import { faqData, FaqInterface } from "lib/models/faq";

interface Props {
  trip: TripInterface[];
  destinations: DestinationInterface[];
  additionals: AdditionalInterface[];
  faq: FaqInterface[];
}

export default function Home(props: Props) {
  const { trip, destinations, additionals, faq } = props;

  return (
    <>
      <HeadComponent
        title="VW Wisata Borobudur - Trip bareng keluarga"
        description="Jangan lewatkan pengalaman menjelajahi keindahan dan budaya di sekitar Borobudur dengan cara yang menyenangkan bersama VW Wisata Borobudur. Rencanakan perjalanan impianmu sekarang!"
      />

      <main>
        <Hero />
        <About />
        <Trip data={trip} />
        <Destinations data={destinations} />
        <Additionals data={additionals} />
        <Contact />
        <Faq data={faq} />
        <Footer />
        <Fab />
      </main>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      trip: tripData,
      destinations: destinationsData,
      additionals: additionalsData,
      faq: faqData,
    },
  };
}
