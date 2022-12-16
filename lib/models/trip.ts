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
    image:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
    title: "Short Trip",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 2 pilihan destinasi wisata dengan durasi sekitar 2.5 jam.",
    duration: 2.5,
    totalDestination: 2,
    price: 350_000,
  },
  {
    category: TripCategory.Medium,
    image:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
    title: "Medium Trip",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 3 pilihan destinasi wisata dengan durasi sekitar 3.5 jam.",
    duration: 3.5,
    totalDestination: 3,
    price: 450_000,
  },
  {
    category: TripCategory.Long,
    image:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
    title: "Long Trip",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 4 pilihan destinasi wisata dengan durasi sekitar 5 jam.",
    duration: 5,
    totalDestination: 4,
    price: 700_000,
  },
  {
    category: TripCategory.OneDay,
    image:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
    title: "One Day",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 7 pilihan destinasi wisata dengan durasi sekitar 9 jam.",
    duration: 9,
    totalDestination: 7,
    price: 900_000,
  },
];
