import { useCartContext } from "lib/context/cart/CartStore";
import { DestinationInterface } from "lib/models/destinations";
import { DestinationCategory } from "lib/types";
import { CartDivider } from "./cartDivider";

export default function CartDestinations() {
  const { destinations } = useCartContext();
  let hasDestinations = destinations.length > 0;

  return (
    <>
      <CartDivider />

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
