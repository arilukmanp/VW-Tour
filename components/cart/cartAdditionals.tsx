import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useCartContext } from "lib/context/cart/CartStore";
import { AdditionalCartInterface } from "lib/context/cart/CartReducer";
import { AdditionalItem } from "lib/types";
import { currencyFormatter } from "lib/utils/currencyFormatter";
import { CartDivider } from "./cartDivider";

export default function CartAdditionals() {
  const { additionals } = useCartContext();

  return (
    <>
      <CartDivider />

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
