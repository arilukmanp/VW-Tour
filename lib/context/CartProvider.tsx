import { ReactNode } from "react";
import { CartContext } from "./CartStore";
import useCartReducer from "./CartReducer";

interface PropsInterface {
  children: ReactNode;
}

export default function CartProvider({ children }: PropsInterface) {
  return (
    <CartContext.Provider value={useCartReducer()}>
      {children}
    </CartContext.Provider>
  );
}
