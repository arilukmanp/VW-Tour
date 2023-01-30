import Footer from "layouts/footer";
import Header from "layouts/header";
import DestinationBody from "components/parts/destination";
import Fab from "components/fab";
import HeadComponent from "components/parts/common/head";
import {
  DestinationInterface,
  destinationsData,
} from "lib/models/destinations";

interface Props {
  destinations: DestinationInterface[];
}

export default function Destinations({ destinations }: Props) {
  return (
    <>
      <HeadComponent
        title="VW Wisata Borobudur - Destinasi"
        description="Temukan destinasi terbaik di sekitar Borobudur dengan pemandangan indah dan menyenangkan. Liburan seru dan tak terlupakan sudah menunggu!"
      />

      <main>
        <Header />
        <DestinationBody data={destinations} />
        <Footer />
        <Fab />
      </main>
    </>
  );
}

export function getStaticProps() {
  return {
    props: { destinations: destinationsData },
  };
}
