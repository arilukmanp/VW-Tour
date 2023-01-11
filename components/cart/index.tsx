import { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { AdditionalItem, DestinationCategory } from "lib/types";
import { DestinationInterface } from "lib/models/destinations";
import useScreenMobile from "lib/hooks/useScreenMobile";
import { useCartContext } from "lib/context/cart/CartStore";
import { AdditionalCartInterface } from "lib/context/cart/CartReducer";
import { currencyFormatter } from "lib/utils/currencyFormatter";
import Alert from "../alert";

interface CartInterface {
  isShow: boolean;
  onDismiss: VoidFunction;
}

export default function Cart({ isShow, onDismiss }: CartInterface) {
  const isMobile = useScreenMobile();
  const { people, trip, destinations, additionals } = useCartContext();
  const [estimatedCar, setEstimatedCar] = useState(1);
  const [selectedDestinations, setSelectedDestinations] = useState("");
  const [selectedAdditionals, setSelectedAdditionals] = useState("");
  const [total, setTotal] = useState(0);
  const [isAlertShow, setIsAlertShow] = useState(false);

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

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP;
  const message = `Halo%20admin,%0ASaya%20mau%20booking%20trip%20dengan%20detail:%0A%0APaket%20Wisata:%20${
    trip.title
  }%0AJumlah%20Orang:%20${people}%0AJumlah%20Unit:%20${estimatedCar}%0ADestinasi:%20${selectedDestinations}%0ATambahan:%20${selectedAdditionals}%0AEstimasi%20Total:%20Rp%20${currencyFormatter(
    total
  )}`;

  const whatsappMobileLink = `https://wa.me/${whatsapp}&text=${message}`;
  const whatsappWebLink = `https://web.whatsapp.com/send?phone=${whatsapp}&text=${message}&type=phone_number&app_absent=0`;

  function onNext() {
    if (!people) {
      return undefined;
    }

    if (isMobile) {
      return whatsappMobileLink;
    } else {
      return whatsappWebLink;
    }
  }

  return (
    <>
      <BottomSheet open={isShow} onDismiss={onDismiss} blocking={true}>
        <div className="flex flex-col">
          <div className="bg-white relative shadow-2xl shadow-gray-300 rounded-3xl p-4 mx-4 my-2">
            <div className="flex-none sm:flex">
              <div className="flex-auto justify-evenly">
                <TripSection />
                {trip.category && <DestinationsSection />}
                {additionals.length > 0 && <AdditionalsSection />}
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

function TripSection() {
  const { people, setPeople, trip } = useCartContext();
  const [totalCar, setTotalCar] = useState(1);
  const [totalAmount, setTotalAmount] = useState(trip.price);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    setPeople(parseInt(value));

    if (parseInt(value) >= 4) {
      let calculatedCar = Math.ceil(parseInt(value) / 4);
      setTotalCar(calculatedCar);
      setTotalAmount(trip.price * calculatedCar);
    } else {
      setTotalCar(1);
      setTotalAmount(trip.price);
    }
  }

  return (
    <>
      {trip.category && (
        <div className="flex flex-1 px-1 justify-between">
          <div className="flex flex-1 flex-col">
            <div className="flex text-xs text-gray-400 my-1 mb-2">
              <span>Paket Trip</span>
            </div>
            <div className="h-full flex flex-col justify-center">
              <span className="text-orangeSoft text-lg font-bold">
                {trip.category.valueOf()}
              </span>

              <div className="flex flex-row">
                <div className="flex items-baseline">
                  <h2 className="text-[10px] font-light text-slate-500 mr-1">
                    Rp
                  </h2>
                  <span className="text-xs font-medium text-cyan-600">
                    {currencyFormatter(totalAmount)}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 mx-2">x</span>
                <span className="text-xs font-medium mr-1 text-lime-500">
                  {`${totalCar} Unit VW`}
                </span>
              </div>
            </div>
          </div>

          <div className="w-24 flex flex-col">
            <label
              htmlFor="people-input"
              className="flex-auto text-xs text-gray-400 my-1"
            >
              Jumlah Orang<span className="text-pink-400">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                inputMode="numeric"
                id="people-input"
                name="people-input"
                value={people?.toString()}
                onChange={handleChange}
                className="my-0.5 py-2 px-3 w-full pr-14 shadow-sm rounded-md text-sm focus:z-10 border-2 border-cyan-500 focus:outline-none focus:border-cyan-600 focus:ring-0 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:text-slate-300 text-cyan-600"
                placeholder="0"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-2">
                <span className="text-xs text-cyan-600">Orang</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {trip.category && (
        <h2 className="mt-4 px-1 text-[9px] font-light text-slate-500 mr-1">
          <span className="text-pink-400">*</span>
          Anak di bawah 3 tahun tidak perlu dihitung
        </h2>
      )}

      {!trip.category && (
        <div className="flex flex-1 flex-col mb-1">
          <div className="flex text-xs text-gray-400 my-1 mb-2">
            <span>Paket Trip</span>
          </div>
          <div className="h-full flex flex-col justify-center">
            <span className="text-slate-800 text-sm font-semibold">
              Belum ada Paket Trip yang dipilih
            </span>
          </div>
        </div>
      )}
    </>
  );
}

function DestinationsSection() {
  const { destinations } = useCartContext();
  let hasDestinations = destinations.length > 0;

  return (
    <>
      <Divider />

      <div className="flex text-xs text-gray-400 px-1 mt-2">
        <span>Destinasi</span>
      </div>

      {hasDestinations &&
        destinations.map((destination, index) => (
          <DestinationCartItem key={index.toString()} data={destination} />
        ))}

      {!hasDestinations && (
        <div className="flex items-center justify-between my-4 px-1 text-sm">
          <div className="text-slate-800 text-sm font-semibold">
            Belum ada Destinasi yang dipilih
          </div>
        </div>
      )}
    </>
  );
}

function AdditionalsSection() {
  const { additionals } = useCartContext();

  return (
    <>
      <Divider />

      <div className="flex text-xs text-gray-400 px-1 mt-2">
        <span>Tambahan</span>
      </div>

      {additionals.map((additional, index) => {
        return (
          <AdditionalCartItem
            key={index.toString()}
            data={additional?.data}
            amount={additional?.amount}
          />
        );
      })}
    </>
  );
}

function DestinationCartItem({ data }: { data: DestinationInterface }) {
  let isRestaurant = data.category == DestinationCategory.Resto;
  let hasAdditionalPrice = Boolean(data?.price);

  function getDescription() {
    if (isRestaurant) {
      return "Biaya makan dan minum ditanggung pribadi";
    } else if (hasAdditionalPrice) {
      return "Terdapat tambahan biaya";
    } else {
      return "Tidak ada tambahan biaya (Gratis)";
    }
  }

  return (
    <div className="flex items-center justify-between my-4 px-1 text-sm">
      <div className="flex flex-col">
        <div className="font-semibold">{data.title}</div>
        <div className="flex flex-row items-center">
          <div className="flex items-baseline">
            <h2 className="text-[10px] font-light text-slate-500 mr-1">
              {getDescription()}
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col w-24">
          <span className="text-xs">Durasi</span>
          <div className="flex items-baseline">
            <span className="text-xs font-semibold text-cyan-600">
              {}
            </span>
            <h2 className="text-[10px] font-light text-slate-500 mr-1">jam</h2>
          </div>
        </div> */}
    </div>
  );
}

function AdditionalCartItem({ data, amount }: AdditionalCartInterface) {
  const { increaseAdditional, decreaseAdditional } = useCartContext();
  const isBallonOrFlare =
    data.item == AdditionalItem.Balloon || data.item == AdditionalItem.Flare;

  return (
    <div className="flex items-center justify-between my-4 px-1 text-sm">
      <div className="flex flex-1 flex-col">
        <div className="font-semibold">{data.title}</div>
        <div className="flex flex-row items-center">
          <div className="flex items-baseline">
            <h2 className="text-[10px] font-light text-slate-500 mr-1">Rp</h2>
            <span className="text-xs font-medium text-cyan-600">
              {data.price ? currencyFormatter(data.price) : "-"}
            </span>
          </div>
        </div>
      </div>

      {isBallonOrFlare && (
        <div className="flex flex-1 flex-col items-start">
          <div className="flex flex-col items-center">
            <span className="mb-0.5 text-xs">Jumlah</span>
            <div className="w-20 flex items-center justify-between">
              <div
                onClick={() => decreaseAdditional(data)}
                className="cursor-pointer"
              >
                <FaMinusCircle
                  size={18}
                  className="text-lime-500 text-opacity-60"
                />
              </div>
              <span className="px-1 text-xs font-bold text-lime-500">
                {amount}
              </span>
              <div
                onClick={() => increaseAdditional(data)}
                className="cursor-pointer"
              >
                <FaPlusCircle
                  size={18}
                  className="text-lime-500 text-opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col w-24">
        <span className="text-xs">Total</span>
        <div className="flex items-baseline">
          <h2 className="text-[10px] font-light text-slate-500 mr-1">Rp</h2>
          <span className="text-xs font-semibold text-cyan-600">
            {currencyFormatter(data.price * amount)}
          </span>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="border-dashed border-b-2 my-6">
      <div className="absolute rounded-full w-5 h-5 bg-gray-100 -mt-2 -left-2" />
      <div className="absolute rounded-full w-5 h-5 bg-gray-100 -mt-2 -right-2" />
    </div>
  );
}
