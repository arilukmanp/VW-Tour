import { Dispatch } from "react";
import Image from "next/image";
import useScreenMobile from "lib/hooks/useScreenMobile";
import { FiClock, FiMapPin } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";
import { TripInterface } from "lib/models/trip";
import { KFormatter } from "lib/utils/currencyFormatter";

interface TripCardInterface {
  data: TripInterface;
  isSelected: boolean;
  setIsSelected: Dispatch<TripInterface>;
}

export default function TripCard(props: TripCardInterface) {
  const { data, isSelected, setIsSelected } = props;
  const isMobile = useScreenMobile();

  return (
    <div
      onClick={() => isMobile && setIsSelected(data)}
      className="p-2 xl:w-1/4 md:w-1/2 w-full"
    >
      <div
        className={`h-full flex flex-col relative overflow-hidden shadow-sm shadow-slate-100 rounded-xl bg-white 
          ${isSelected && "border-2 border-cyan-500"}`}
      >
        <div className="relative">
          <div className="w-full h-64 xl:h-auto xl:aspect-[4/2.5]">
            <Image
              src={`${data.image}`}
              alt={`Foto ${data.title}`}
              layout={"fill"}
              quality={50}
              className={"object-cover"}
            />
          </div>

          <div className="absolute flex items-center bg-orange-800 backdrop-blur bg-opacity-40 rounded-md rounded-r-none px-2 py-1 pr-4 bottom-2 right-0">
            <h2 className="text-xs font-light text-white mr-1">Rp</h2>
            <h2 className="text-sm font-semibold text-white">
              {KFormatter(data.price)}
            </h2>
          </div>
        </div>

        <div
          className={`p-4 pt-3
          ${!isSelected && "border rounded-t-none border-t-0 rounded-xl"}`}
        >
          <h3 className="mb-2.5 text-xl font-semibold text-slate-800">
            {data.title}
          </h3>

          <div className="flex flex-row items-center pb-3 mb-6 border-b border-gray-200 text-cyan-500">
            <div className="flex items-center mr-2">
              <div className="flex flex-row bg-slate-100 bg-opacity-90 rounded-md px-4 py-1.5 items-center">
                <FiClock size={13} className="mr-2" />
                <p className="mt-0.5 text-xs font-semibold">
                  {data.duration}
                  <span className="font-light"> jam</span>
                </p>
              </div>
            </div>

            <div className="">
              <div className="flex items-center">
                <div className="flex flex-row bg-slate-100 bg-opacity-90 rounded-md px-4 py-1.5 items-center">
                  <FiMapPin size={13} className="mr-2" />
                  <p className="mt-0.5 text-xs font-semibold">
                    {data.totalDestination}
                    <span className="font-light"> destinasi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-3 mb-3 md:mb-8">
            {data.description}
          </p>

          <button
            onClick={() => setIsSelected(data)}
            className={`hidden -md:hidden md:block w-full py-2 px-4 items-center text-center hover:bg-orangeSoft border rounded-md ${
              isSelected
                ? "text-white bg-orangeSoft border-orangeSoft"
                : "text-orangeSoft bg-orange-50 bg-opacity-20 border-orangeSoft hover:border-orangeSoft hover:text-white"
            }`}
          >
            {isSelected ? "Terpilih" : "Pilih Trip Ini"}
          </button>
        </div>

        {isSelected && (
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-cyan-100 bg-opacity-20 flex items-center justify-center">
            <div className="relative rounded-full flex items-center justify-center">
              <div className="absolute bg-white p-6 rounded-full z-0" />
              <HiBadgeCheck size={100} className="text-cyan-500 z-0" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
