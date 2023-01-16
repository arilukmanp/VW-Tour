"use client";

import { ReactNode } from "react";
import { CartContext } from "./CartStore";
import useCartReducer from "./CartReducer";

interface PropsInterface {
  children: ReactNode;
}

export default function CartProvider({ children }: PropsInterface) {
  const value = useCartReducer();

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
