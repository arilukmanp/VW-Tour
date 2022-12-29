import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { BiCartAlt } from "react-icons/bi";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { currencyFormatter } from "lib/utils/currencyFormatter";
import { AdditionalInterface, additionalsData } from "lib/models/additionals";
import { AdditionalItem } from "lib/types";
import {
  DestinationInterface,
  destinationsData,
} from "lib/models/destinations";

interface CartInterface {
  isShow: boolean;
  onDismiss: VoidFunction;
}

export default function Fab() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toogle() {
    setIsExpanded(!isExpanded);
  }

  //${isExpanded && "animate-bounce-short"}

  return (
    <>
      <div
        onClick={toogle}
        className="bottom-safe right-0 fixed mx-4 z-50 cursor-pointer"
      >
        <div
          className={`relative rounded-full flex shadow-lg bg-orangeSoft min-h-[4rem] min-w-[4rem] items-center justify-center transition-opacity duration-300 ease-out
          ${isExpanded && "opacity-0"}`}
        >
          <BiCartAlt size={28} className="text-white" />
          <div className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full shadow-md shadow-rose-500" />
        </div>
      </div>

      <MobileCart isShow={isExpanded} onDismiss={toogle} />
    </>
  );
}

function DestinationCartItem(props: { data: DestinationInterface }) {
  const data = props.data;

  return (
    <div className="flex items-center justify-between my-4 px-1 text-sm">
      <div className="flex flex-col">
        <div className="font-semibold">{data.title}</div>
        <div className="flex flex-row items-center">
          <div className="flex items-baseline">
            <h2 className="text-[10px] font-light text-slate-500 mr-1">
              {data.price
                ? "Terdapat tambahan biaya untuk tiket masuk"
                : "Tidak ada tiket masuk (Gratis)"}
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

function AdditionalCartItem(props: { data: AdditionalInterface }) {
  const data = props.data;
  const isBallonOrFlare =
    data.item == AdditionalItem.Balloon || data.item == AdditionalItem.Flare;

  const [amount, setAmount] = useState(1);

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
              <button onClick={() => setAmount(amount - 1)}>
                <FaMinusCircle
                  size={18}
                  className="text-lime-500 text-opacity-60"
                />
              </button>
              <span className="px-1 text-xs font-bold text-lime-500">
                {amount}
              </span>
              <button onClick={() => setAmount(amount + 1)}>
                <FaPlusCircle
                  size={18}
                  className="text-lime-500 text-opacity-80"
                />
              </button>
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

function MobileCart({ isShow, onDismiss }: CartInterface) {
  const [totalCar, setTotalCar] = useState(1);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;

    // if (parseInt(value)) {
    //   setTotalHuman(value);
    // }

    if (parseInt(value) >= 4) {
      let calculatedCar = Math.ceil(parseInt(value) / 4);
      setTotalCar(calculatedCar);
    } else {
      setTotalCar(1);
    }
  }

  return (
    <BottomSheet open={isShow} onDismiss={onDismiss}>
      <div className="flex flex-col">
        <div className="bg-white relative shadow-2xl shadow-gray-300 rounded-3xl p-4 mx-4 my-2">
          <div className="flex-none sm:flex">
            <div className="flex-auto justify-evenly">
              <div className="flex flex-1 px-1 justify-between">
                <div className="flex flex-1 flex-col">
                  <div className="flex text-xs text-gray-400 my-1 mb-2">
                    <span>Paket Trip</span>
                  </div>
                  <div className="h-full flex flex-col justify-center">
                    <span className="text-orangeSoft text-lg font-bold">
                      Medium Trip
                    </span>
                    <div className="flex flex-row">
                      <div className="flex items-baseline">
                        <h2 className="text-[10px] font-light text-slate-500 mr-1">
                          Rp
                        </h2>
                        <span className="text-xs font-medium text-cyan-600">
                          {currencyFormatter(350_000)}
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
              <h2 className="mt-4 px-1 text-[9px] font-light text-slate-500 mr-1">
                <span className="text-pink-400">*</span>
                Anak di bawah 3 tahun tidak perlu dihitung
              </h2>

              <Divider />

              <div className="flex text-xs text-gray-400 px-1 mt-2">
                <span>Destinasi</span>
              </div>

              <DestinationCartItem data={destinationsData[4]} />
              <DestinationCartItem data={destinationsData[11]} />
              <DestinationCartItem data={destinationsData[5]} />

              <Divider />

              <div className="flex text-xs text-gray-400 px-1 mt-2">
                <span>Tambahan</span>
              </div>

              <AdditionalCartItem data={additionalsData[0]} />
              <AdditionalCartItem data={additionalsData[3]} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-2 mx-2 mt-1 md:mb-2 lg:mb-4 z-0">
          <div className="mx-1">
            <h3 className="text-[10px] text-slate-400">Estimasi:</h3>
            <div className="flex items-baseline">
              <h2 className="text-xs font-light text-slate-500 mr-1">Rp</h2>
              <h2 className="text-lg font-bold text-cyan-600">
                {currencyFormatter(1_420_000)}
              </h2>
            </div>
          </div>

          <a href="">
            <button
              type="button"
              className="py-3 px-5 inline-flex justify-center items-center rounded-lg font-semibold bg-orangeSoft text-white hover:bg-orange-500 transition-all text-sm"
            >
              Lanjutkan
            </button>
          </a>
        </div>
      </div>
    </BottomSheet>
  );
}
