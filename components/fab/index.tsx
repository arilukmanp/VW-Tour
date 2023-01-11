import { useEffect, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useCartContext } from "lib/context/cart/CartStore";
import Cart from "../cart";

export default function Fab() {
  const { trip, destinations, additionals } = useCartContext();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnyChange, setIsAnyChange] = useState(false);

  function toogle() {
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {
    setIsAnyChange(true);
    let delay = setTimeout(() => setIsAnyChange(false), 500);

    return () => {
      delay;
    };
  }, [trip, destinations, additionals]);

  return (
    <>
      <button
        role={"button"}
        onClick={toogle}
        id="fab"
        className={`bottom-safe right-0 fixed mx-4 z-[1] cursor-pointer ${
          isAnyChange && "animate-bounce-short"
        }`}
      >
        <div
          className={`relative rounded-full flex shadow-lg bg-orangeSoft min-h-[4rem] min-w-[4rem] items-center justify-center transition-opacity duration-300 ease-out
          ${isExpanded && "opacity-0"}`}
        >
          <BiCartAlt size={28} className="text-white" />

          {trip.category && (
            <div className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full shadow-md shadow-rose-500">
              <span className="absolute right-0 animate-ping inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            </div>
          )}
        </div>
      </button>

      <Cart isShow={isExpanded} onDismiss={toogle} />
    </>
  );
}
