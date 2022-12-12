import { AdditionalItem } from "lib/types";

export interface AdditionalInterface {
  item: AdditionalItem;
  title: string;
  device?: string;
  receive: string[];
  price: number;
  hasCharge?: boolean;
}

export const additionalsData: AdditionalInterface[] = [
  {
    item: AdditionalItem.Balloon,
    title: "Balloon",
    receive: ["1 Balloon"],
    price: 10_000,
  },
  {
    item: AdditionalItem.Flare,
    title: "Flare/Suar",
    receive: ["1 Suar"],
    price: 15_000,
  },
];
