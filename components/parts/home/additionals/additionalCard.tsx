"use client";

import { useCallback } from "react";
import { AdditionalInterface } from "lib/models/additionals";
import { KFormatter } from "lib/utils/currencyFormatter";
import { useCartContext } from "lib/context/cart/CartStore";

interface AdditionalCardInterface {
  data: AdditionalInterface;
}

export default function AdditionalCard({ data }: AdditionalCardInterface) {
  const { additionals, addAdditional, removeAdditional } = useCartContext();

  const isSelected: boolean = Boolean(
    additionals.find((additional) => additional?.data?.item == data.item)
  );

  const onSelect = useCallback(() => {
    if (isSelected) {
      removeAdditional(data);
    } else {
      addAdditional(data);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [additionals]);

  return (
    <div
      onClick={onSelect}
      className={`flex max-w-2xl mx-auto items-center justify-between cursor-pointer rounded-xl ${
        isSelected
          ? "border-2 md:px-[calc(theme(spacing.8)-1px)] p-[calc(theme(spacing.4)-1px)] border-cyan-500 bg-cyan-50 bg-opacity-20"
          : "border p-4 md:px-8"
      }`}
    >
      <div className="flex items-center">
        <ChecklistIcon isSelected={isSelected} />

        <div className="flex flex-col items-start sm:mx-5 space-y-1">
          <h2 className="mb-3 text-lg font-medium leading-none text-gray-700">
            {data.title}{" "}
            {data.device && (
              <span className="text-[10px] font-normal text-lime-500">{`(${data.device})`}</span>
            )}
          </h2>
          <div className="flex flex-row space-x-1">
            <Benefits data={data.receive} />
          </div>
        </div>
      </div>

      <h2
        className={`relative text-lg font-semibold 
        ${isSelected ? "text-cyan-500" : "text-gray-500"}`}
      >
        {KFormatter(data.price)}
        {data.hasCharge && (
          <span className="absolute text-sm text-red-300">*</span>
        )}
      </h2>
    </div>
  );
}

function ChecklistIcon({ isSelected }: { isSelected: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`hidden sm:block sm:h-6 sm:w-6
            ${isSelected ? "text-cyan-500" : "text-gray-300"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Benefits({ data }: { data: string[] }) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index.toString()}
          className="px-2 py-0.5 sm:py-1 text-xs text-cyan-500 bg-slate-100 bg-opacity-90 rounded-sm sm:rounded-md"
        >
          {item}
        </div>
      ))}
    </>
  );
}
