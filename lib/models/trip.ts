import { TripCategory } from "lib/types";

export interface TripInterface {
  category: TripCategory;
  image: string;
  title: string;
  description: string;
  duration: number;
  totalDestination: number;
  price: number;
}

export const tripData: TripInterface[] = [
  {
    category: TripCategory.Short,
    image: "short.webp",
    title: "Short Trip",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 2 pilihan destinasi wisata dengan durasi sekitar 2.5 jam.",
    duration: 2.5,
    totalDestination: 2,
    price: 350_000,
  },
  {
    category: TripCategory.Medium,
    image: "medium.webp",
    title: "Medium Trip",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 3 pilihan destinasi wisata dengan durasi sekitar 3.5 jam.",
    duration: 3.5,
    totalDestination: 3,
    price: 450_000,
  },
  {
    category: TripCategory.Long,
    image: "long.webp",
    title: "Long Trip",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 4 pilihan destinasi wisata dengan durasi sekitar 5 jam.",
    duration: 5,
    totalDestination: 4,
    price: 700_000,
  },
  {
    category: TripCategory.OneDay,
    image: "one-day.webp",
    title: "One Day",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 7 pilihan destinasi wisata dengan durasi sekitar 9 jam.",
    duration: 9,
    totalDestination: 7,
    price: 900_000,
  },
];
