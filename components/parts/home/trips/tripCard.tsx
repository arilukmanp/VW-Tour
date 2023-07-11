import { Fragment, useState } from "react";
import Image from "next/image";
import useScreenMobile from "lib/hooks/useScreenMobile";
import { FiClock, FiMapPin } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";
import { TripInterface } from "lib/models/trip";
import { useCartContext } from "lib/context/cart/CartStore";
import { KFormatter } from "lib/utils/currencyFormatter";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { TripCategory } from "lib/types";

interface TripCardInterface {
  data: TripInterface;
}

export default function TripCard({ data }: TripCardInterface) {
  const isMobile = useScreenMobile();
  const { trip, setTrip } = useCartContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isSelectedTrip = trip?.category == data.category;

  return (
    <>
      <div
        onClick={() => {
          if (isMobile) {
            setTrip(data);
            setIsDialogOpen(true);
          }
        }}
        className="p-2 xl:w-1/4 md:w-1/2 w-full"
      >
        <div
          className={`h-full flex flex-col relative overflow-hidden shadow-sm shadow-slate-100 rounded-xl bg-white 
          ${isSelectedTrip && "border-2 border-cyan-500"}`}
        >
          <div className="relative">
            <div className="relative w-full h-64 xl:h-auto xl:aspect-[4/2.5]">
              <Image
                src={`/images/trip/${data.image}`}
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
            className={`flex flex-1 flex-col p-4 pt-3
          ${!isSelectedTrip && "border rounded-t-none border-t-0 rounded-xl"}`}
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

            <p className="flex flex-1 text-sm text-gray-500 pb-2 md:pb-8">
              {data.description}
            </p>

            <button
              onClick={() => {
                setTrip(data);
                setIsDialogOpen(true);
              }}
              className={`hidden -md:hidden md:block w-full py-2 px-4 items-center text-center hover:bg-orangeSoft border rounded-md ${
                isSelectedTrip
                  ? "text-white bg-orangeSoft border-orangeSoft"
                  : "text-orangeSoft bg-orange-50 bg-opacity-20 border-orangeSoft hover:border-orangeSoft hover:text-white"
              }`}
            >
              {isSelectedTrip ? "Terpilih" : "Pilih Trip Ini"}
            </button>
          </div>

          {isSelectedTrip && (
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-cyan-100 bg-opacity-20 flex items-center justify-center">
              <div className="relative rounded-full flex items-center justify-center">
                <div className="absolute bg-white p-6 rounded-full z-0" />
                <HiBadgeCheck size={100} className="text-cyan-500 z-0" />
              </div>
            </div>
          )}
        </div>
      </div>

      <Transition appear show={isDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsDialogOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Paket Trip Berhasil Dipilih
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {trip.category == TripCategory.Sunrise1
                        ? `Selanjutnya silakan pilih ${trip.totalDestination} destinasi tujuan lainnya selain Punthuk Setumbu.`
                        : trip.category == TripCategory.Sunrise2
                        ? `Selanjutnya silakan pilih ${trip.totalDestination} destinasi tujuan lainnya selain Enam Langit.`
                        : `Selanjutnya silakan pilih maksimal ${trip.totalDestination} destinasi.`}
                    </p>
                  </div>

                  <div className="flex mt-10">
                    <Link href={"/#destinations"}>
                      <button
                        onClick={() => setIsDialogOpen(false)}
                        type="button"
                        className="mx-auto justify-center rounded-md border border-transparent bg-orangeSoft px-8 py-2 text-sm font-medium text-white hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      >
                        Pilih Destinasi
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
