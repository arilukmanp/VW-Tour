"use client";

import Image from "next/image";
import { HiBadgeCheck } from "react-icons/hi";
import { DestinationInterface } from "lib/models/destinations";
import { useCartContext } from "lib/context/cart/CartStore";
import { useDestinationContext } from "lib/context/destinations/destinationsStore";

export default function DestinationCard(props: { data: DestinationInterface }) {
  const data = props.data;
  const { destinations } = useCartContext();
  const { showDetail } = useDestinationContext();

  const isSelected = destinations.find(
    (destination) => destination.title == data.title
  );

  return (
    <div
      onClick={() => showDetail(data)}
      className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer"
    >
      <div
        className={`relative ${
          isSelected && "border-2 border-cyan-500 rounded-[10px]"
        }`}
      >
        <div className="relative w-full aspect-video">
          <Image
            src={`/images/destinations/${data.images[0]}`}
            alt={`Foto ÷${data.title}`}
            layout={"fill"}
            quality={50}
            className={"rounded-lg object-cover"}
          />
        </div>

        <div className="absolute bottom-0 w-full h-1/3 rounded-b-lg bg-gradient-to-t from-slate-900/50 to-slate-800/0" />

        <div className="absolute bottom-0 left-0 px-4 py-2.5">
          <h2 className="text-md font-semibold text-white">{data.title}</h2>
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
