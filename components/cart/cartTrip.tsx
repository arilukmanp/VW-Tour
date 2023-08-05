"use client";

import { useCartContext } from "lib/context/cart/CartStore";
import { currencyFormatter } from "lib/utils/currencyFormatter";

export default function CartTrip() {
  const { people, setPeople, car, trip } = useCartContext();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    setPeople(value);
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
                    {currencyFormatter(trip.price)}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 mx-2">x</span>
                <span className="text-xs font-medium mr-1 text-lime-500">
                  {`${car} Unit VW`}
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
          Anak di bawah 5 tahun (max 1 anak) tidak perlu dihitung
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
