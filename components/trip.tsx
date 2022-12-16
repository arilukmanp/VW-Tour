import { useState } from "react";
import { tripData, TripInterface } from "lib/models/trip";
import TripCard from "./tripCard";

export default function Trip() {
  const [isSelected, setIsSelected] = useState<TripInterface>();

  return (
    <section id="trip" className="bg-whiteBone">
      <div className="text-gray-600 overflow-hidden">
        <div className="container px-8 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-semibold mb-4 text-gray-900">
              Pilihan Trip
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Kami menyediakan berbagai pilihan trip untuk liburan anda
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {tripData.map((trip, index) => {
              let isTripSelected = isSelected?.category == trip.category;

              return (
                <TripCard
                  key={index.toString()}
                  data={trip}
                  isSelected={isTripSelected}
                  setIsSelected={setIsSelected}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
