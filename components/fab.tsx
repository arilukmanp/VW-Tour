import { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import Cart from "./cart";

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
        className="bottom-safe right-0 fixed mx-4 z-[1] cursor-pointer"
      >
        <div
          className={`relative rounded-full flex shadow-lg bg-orangeSoft min-h-[4rem] min-w-[4rem] items-center justify-center transition-opacity duration-300 ease-out
          ${isExpanded && "opacity-0"}`}
        >
          <BiCartAlt size={28} className="text-white" />
          <div className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full shadow-md shadow-rose-500" />
        </div>
      </div>

      <Cart isShow={isExpanded} onDismiss={toogle} />
    </>
  );
}
