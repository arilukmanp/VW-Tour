"use client";

import { createContext, useContext } from "react";
import useCartReducer from "./CartReducer";

type ContextType = ReturnType<typeof useCartReducer>;
const initialContext = {} as unknown as ContextType;

export const CartContext = createContext<ContextType>(initialContext);
export const useCartContext = () => useContext(CartContext);
