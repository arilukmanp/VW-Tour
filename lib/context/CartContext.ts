import { createContext, useContext } from "react";
import { AdditionalInterface } from "lib/models/additionals";
import { DestinationInterface } from "lib/models/destinations";
import { TripInterface } from "lib/models/trip";

interface AdditionalCartInterface {
  data: AdditionalInterface;
  amount: number;
}

export interface CartInterface {
  people: number | null;
  trip: TripInterface | null;
  destinations: DestinationInterface[] | null;
  additionals: AdditionalCartInterface[] | null;
}

export const initialCartData: CartInterface = {
  people: null,
  trip: null,
  destinations: null,
  additionals: null,
};

export const CartContext = createContext<CartInterface>(initialCartData);
export const useCartContext = () => useContext(CartContext);
