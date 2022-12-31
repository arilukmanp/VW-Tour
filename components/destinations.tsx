import {
  destinationsData,
  DestinationInterface,
} from "lib/models/destinations";
import Image from "next/image";
import Link from "next/link";

export default function Destinations() {
  const destinationToShow = [
    { index: 3, imgIndex: 0 },
    { index: 9, imgIndex: 0 },
    { index: 11, imgIndex: 1 },
    { index: 12, imgIndex: 0 },
    { index: 1, imgIndex: 0 },
    { index: 7, imgIndex: 0 },
  ];

  return (
    <section id="destinations" className="bg-whiteBone">
      <div className="flex justify-center items-center">
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
              Belasan tujuan destinasi populer dapat anda pilih di VW Tour
              Borobudur
            </p>
          </div>

          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between gap-x-4">
                <div className="sm:w-1/2 relative">
                  <DestinationThumbnail
                    data={destinationsData[destinationToShow[0].index]}
                    imgIndex={destinationToShow[0].imgIndex}
                    viewMode={ThumbnailView.Small}
                  />
                </div>

                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <DestinationThumbnail
                    data={destinationsData[destinationToShow[1].index]}
                    imgIndex={destinationToShow[1].imgIndex}
                    viewMode={ThumbnailView.Small}
                  />
                </div>
              </div>

              <div className="mt-4">
                <DestinationThumbnail
                  data={destinationsData[destinationToShow[2].index]}
                  imgIndex={destinationToShow[2].imgIndex}
                  viewMode={ThumbnailView.Big}
                />
              </div>
            </div>

            <div className="lg:w-1/2 lg:ml-4 lg:mt-0 mt-4 lg:flex flex-col justify-between">
              <DestinationThumbnail
                data={destinationsData[destinationToShow[3].index]}
                imgIndex={destinationToShow[3].imgIndex}
                viewMode={ThumbnailView.Big}
              />

              <div className="sm:flex items-center justify-between gap-x-4 mt-4">
                <div className="w-full relative">
                  <DestinationThumbnail
                    data={destinationsData[destinationToShow[4].index]}
                    imgIndex={destinationToShow[4].imgIndex}
                    viewMode={ThumbnailView.Small}
                  />
                </div>

                <div className="w-full sm:mt-0 mt-4 relative">
                  <DestinationThumbnail
                    data={destinationsData[destinationToShow[5].index]}
                    imgIndex={destinationToShow[5].imgIndex}
                    viewMode={ThumbnailView.Small}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center mt-10">
            <Link href={"/destinations"}>
              <button
                type="button"
                className="py-3 px-4 inline-flex justify-center items-center rounded-lg font-semibold bg-orangeSoft text-white hover:bg-orange-500 transition-all text-sm"
              >
                Destinasi Lainnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

enum ThumbnailView {
  Small,
  Big,
}

interface dataThumbnailInterface {
  data: DestinationInterface;
  imgIndex: number;
  viewMode: ThumbnailView;
}

function DestinationThumbnail(props: dataThumbnailInterface) {
  const { data, imgIndex } = props;
  const isBigThumbnail = props.viewMode == ThumbnailView.Big;

  return (
    <div className={`cursor-pointer ${isBigThumbnail ? "relative" : ""}`}>
      <div
        className={`w-full lg:aspect-[4/3] aspect-video 
        ${isBigThumbnail && "sm:block"}`}
      >
        <Image
          src={`/images/destinations/${data.images[imgIndex]}`}
          alt={`Foto ${data.title}`}
          layout={"fill"}
          quality={50}
          className={"rounded-lg object-cover"}
        />
      </div>
      <div
        className={`absolute bottom-0 w-full h-1/3 rounded-b-lg bg-gradient-to-t from-slate-900/50 to-slate-800/0 
        ${isBigThumbnail && "sm:h-1/5"}`}
      />
      <div className="absolute bottom-0 left-0 px-4 py-2.5">
        <h2 className="text-md font-semibold text-white">{data.title}</h2>
      </div>
    </div>
  );
}