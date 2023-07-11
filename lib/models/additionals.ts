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
    title: "Smoke Bomb",
    receive: ["1 Smoke Bomb"],
    price: 15_000,
  },
  {
    item: AdditionalItem.Happy,
    title: "Paket Dokumentasi Happy",
    device: "Kamera iPhone 3 Lens",
    receive: ["Video Reels", "Bonus Foto"],
    price: 350_000,
  },
  {
    item: AdditionalItem.Vacation,
    title: "Paket Dokumentasi Vacation",
    device: "Kamera Profesional",
    receive: ["1 Menit Video", "100 Edited Foto"],
    price: 600_000,
  },
  {
    item: AdditionalItem.Holiday,
    title: "Paket Dokumentasi Holiday",
    device: "Kamera iPhone + Drone",
    receive: ["1 Menit Video", "100 Edited Foto"],
    price: 900_000,
  },
  {
    item: AdditionalItem.Corporate,
    title: "Paket Dokumentasi Corporate",
    device: "Kamera Profesional",
    receive: ["1-3 Menit Video", "50-100 Edited Foto"],
    price: 1_000_000,
  },
  {
    item: AdditionalItem.Vip,
    title: "Paket Dokumentasi VIP",
    device: "Kamera Profesional + Drone",
    receive: ["1-8 Menit Video", "Unlimited Foto"],
    price: 1_500_000,
    hasCharge: true,
  },
];
