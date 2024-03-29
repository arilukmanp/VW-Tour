import LogoClouds from "components/parts/home/logo-clouds";
import About from "components/parts/home/about";
import Additionals from "components/parts/home/additionals";
import Contact from "components/parts/home/contact";
import Destinations from "components/parts/home/destinations";
import Fab from "components/fab";
import Faq from "components/parts/home/faq";
import Hero from "components/parts/home/hero";
import Maps from "components/parts/home/maps";
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
import { logoCloudsData, LogoCloudsInterface } from "lib/models/logo";

interface Props {
  logoClouds: LogoCloudsInterface[];
  trip: TripInterface[];
  destinations: DestinationInterface[];
  additionals: AdditionalInterface[];
  faq: FaqInterface[];
}

export default function Home(props: Props) {
  const { logoClouds, trip, destinations, additionals, faq } = props;

  return (
    <>
      <HeadComponent
        title="VW Wisata Borobudur - Trip bareng keluarga"
        description="Liburan menyenangkan dengan mobil VW dan tour keliling daerah wisata di sekitar Borobudur. Pilih destinasinya, booking sekarang juga!"
      />

      <main>
        <Hero />
        <About />
        <LogoClouds data={logoClouds} />
        <Trip data={trip} />
        <Destinations data={destinations} />
        <Additionals data={additionals} />
        <Contact />
        <Faq data={faq} />
        <Maps />
        <Footer />
        <Fab />
      </main>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      logoClouds: logoCloudsData,
      trip: tripData,
      destinations: destinationsData,
      additionals: additionalsData,
      faq: faqData,
    },
  };
}
