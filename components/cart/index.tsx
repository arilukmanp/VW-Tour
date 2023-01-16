"use client";

import { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { AdditionalItem } from "lib/types";
import useWhatsapp from "lib/hooks/useWhatsapp";
import useScreenMobile from "lib/hooks/useScreenMobile";
import { useCartContext } from "lib/context/cart/CartStore";
import { currencyFormatter } from "lib/utils/currencyFormatter";
import Alert from "components/alert";
import CartTrip from "./cartTrip";
import CartDestinations from "./cartDestinations";
import CartAdditionals from "./cartAdditionals";

interface CartInterface {
  isShow: boolean;
  onDismiss: VoidFunction;
}

export default function Cart({ isShow, onDismiss }: CartInterface) {
  const isMobile = useScreenMobile();
  const sendToWhatsapp = useWhatsapp();
  const { people, trip, destinations, additionals } = useCartContext();
  const [estimatedCar, setEstimatedCar] = useState(1);
  const [selectedDestinations, setSelectedDestinations] = useState("");
  const [selectedAdditionals, setSelectedAdditionals] = useState("");
  const [total, setTotal] = useState(0);
  const [isAlertShow, setIsAlertShow] = useState(false);

  const waMessage = `Halo%20admin,%0ASaya%20mau%20booking%20trip%20dengan%20detail:%0A%0APaket%20Wisata:%20${
    trip.title
  }%0AJumlah%20Orang:%20${people}%0AJumlah%20Unit:%20${estimatedCar}%0ADestinasi:%20${selectedDestinations}%0ATambahan:%20${selectedAdditionals}%0AEstimasi%20Total:%20Rp%20${currencyFormatter(
    total
  )}`;

  useEffect(() => {
    const tourist: number = people ?? 1;
    const car: number = Math.ceil(tourist / 4) ?? 1;
    const tripPrice: number = trip.price * car;
    const additionalsPrice: number = additionals.reduce(
      (acc, curr) => acc + curr.data.price * curr.amount,
      0
    );

    const dest: string = destinations.map((item) => item.title).join(", ");
    const addt: string = additionals
      .map((item) => {
        let isBallonOrFlare =
          item.data.item == AdditionalItem.Balloon ||
          item.data.item == AdditionalItem.Flare;

        if (isBallonOrFlare) {
          return `${item.data.title} (${item.amount})`;
        }

        return item.data.title;
      })
      .join(", ");

    setEstimatedCar(car);
    setSelectedDestinations(dest);
    setSelectedAdditionals(addt.length > 0 ? addt : "-");
    setTotal(tripPrice + additionalsPrice);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [people, trip, additionals]);

  function onNext() {
    if (!people) {
      return undefined;
    }

    return sendToWhatsapp({ isMobile: isMobile, message: waMessage });
  }

  return (
    <>
      <BottomSheet
        open={isShow}
        onDismiss={onDismiss}
        blocking
        expandOnContentDrag
      >
        <div className="flex flex-col">
          <div className="bg-white relative shadow-2xl shadow-gray-300 rounded-3xl p-4 mx-4 my-2">
            <div className="flex-none sm:flex">
              <div className="flex-auto justify-evenly">
                <CartTrip />
                {trip.category && <CartDestinations />}
                {additionals.length > 0 && <CartAdditionals />}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 mx-2 mt-1 md:mb-2 lg:mb-4 z-0">
            <div className="mx-1">
              <h3 className="text-[10px] text-slate-400">Estimasi:</h3>
              <div
                className={`flex 
              ${total > 0 ? "items-baseline" : "items-center"}`}
              >
                <h2 className="text-xs font-light text-slate-500 mr-1">Rp</h2>
                <h2 className="text-lg font-bold text-cyan-600">
                  {people && total > 0 ? currencyFormatter(total) : "-"}
                </h2>
              </div>
            </div>

            <a
              onClick={() => !people && setIsAlertShow(true)}
              href={onNext()}
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                disabled={!trip.title || destinations.length <= 0}
                className="py-3 px-5 inline-flex justify-center items-center rounded-lg font-semibold bg-orangeSoft text-white hover:bg-orange-500 transition-all text-sm disabled:bg-gray-300"
              >
                Lanjutkan
              </button>
            </a>
          </div>
        </div>
      </BottomSheet>

      <Alert isShowed={isAlertShow} setIsShowed={setIsAlertShow}>
        <p>
          Silakan isi kolom <u>Jumlah Orang</u> terlebih dahulu
        </p>
      </Alert>
    </>
  );
}
