import DestinationCard from "components/parts/common/destinationCard";
import TitleOrnament from "components/ornament";
import { destinationsData } from "lib/models/destinations";

export default function DestinationBody() {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className="2xl:mx-auto 2xl:container w-full lg:px-8 md:px-12 py-24 px-4 mx-1 sm:px-12">
        <div className="mb-12 md:mx-auto w-full text-center lg:max-w-2xl">
          <h2 className="max-w-lg mb-4 font-sans text-3xl font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto">
            <TitleOrnament title="Pilihan Destinasi" />
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
  );
}
