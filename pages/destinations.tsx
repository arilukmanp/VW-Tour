import Head from "next/head";
import { destinationsData } from "lib/models/destinations";
import Footer from "layouts/footer";
import Header from "layouts/header";
import DestinationCard from "components/destinationCard";
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

        <div className="flex justify-center items-center bg-white">
          <div className="2xl:mx-auto 2xl:container w-full lg:px-8 md:px-12 py-24 px-4 mx-1 sm:px-12">
            <div className="mb-12 md:mx-auto w-full text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-4 font-sans text-3xl font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute text-lime-500 top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Pilihan Destinasi</span>
                </span>
              </h2>
              <p className="mx-auto leading-relaxed text-base text-gray-500">
                Mau destinasi edukasi atau wisata ikonik, semuanya ada!
              </p>
              <p className="mx-auto leading-relaxed text-base text-gray-500">
                Belasan tujuan destinasi populer dapat anda pilih di VW Wisata
                Borobudur
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:mt-12 mt-8">
              {destinationsData.map((destination, index) => (
                <DestinationCard key={index.toString()} data={destination} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
        <Fab />
      </main>
    </>
  );
}
