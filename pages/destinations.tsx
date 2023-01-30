import Head from "next/head";
import Footer from "layouts/footer";
import Header from "layouts/header";
import DestinationBody from "components/parts/destination";
import Fab from "components/fab";
import HeadComponent from "components/parts/common/head";

export default function Destinations() {
  return (
    <>
      <HeadComponent
        title="VW Wisata Borobudur - Destinasi"
        description="Temukan destinasi terbaik di sekitar Borobudur dengan pemandangan indah dan menyenangkan. Liburan seru dan tak terlupakan sudah menunggu!"
      />

      <main>
        <Header />
        <DestinationBody />
        <Footer />
        <Fab />
      </main>
    </>
  );
}
