import { createContext, useContext } from "react";
import useCartReducer from "./CartReducer";

type ContextType = ReturnType<typeof useCartReducer>;
const initialCartContext = {} as unknown as ContextType;

export const CartContext = createContext<ContextType>(initialCartContext);
export const useCartContext = () => useContext(CartContext);
