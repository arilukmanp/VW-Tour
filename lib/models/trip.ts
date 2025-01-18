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
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 2 pilihan destinasi wisata + spot foto dengan durasi sekitar 2 jam.",
    duration: 2,
    totalDestination: 2,
    price: 400_000,
  },
  {
    category: TripCategory.Medium,
    image: "medium.webp",
    title: "Medium Trip",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 3 pilihan destinasi wisata + spot foto dengan durasi sekitar 3 jam.",
    duration: 3,
    totalDestination: 3,
    price: 550_000,
  },
  {
    category: TripCategory.Long,
    image: "long.webp",
    title: "Long Trip",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 4 pilihan destinasi wisata + spot foto dengan durasi sekitar 4 jam.",
    duration: 4,
    totalDestination: 4,
    price: 700_000,
  },
  {
    category: TripCategory.OneDay,
    image: "one-day.webp",
    title: "One Day",
    description:
      "Keliling perdesaan di sekitar Borobudur dan mengunjungi 5 pilihan destinasi wisata + spot foto dengan durasi sekitar 9 jam.",
    duration: 8,
    totalDestination: 5,
    price: 1_200_000,
  },
  {
    category: TripCategory.Sunrise1,
    image: "sunrise1.webp",
    title: "Sunrise 1",
    description:
      "Nikmati keindahan sunrise di Punthuk Setumbu dan mengunjungi 1 pilihan destinasi wisata lainnya + spot foto dengan durasi sekitar 4 jam atau maksimal sampai pukul 8.",
    duration: 3,
    totalDestination: 1,
    price: 600_000,
  },
  {
    category: TripCategory.Sunrise2,
    image: "sunrise2.webp",
    title: "Sunrise 2",
    description:
      "Nikmati keindahan sunrise di Enam Langit dan mengunjungi 1 pilihan destinasi wisata lainnya + spot foto dengan durasi sekitar 4 jam atau maksimal sampai pukul 8.",
    duration: 3,
    totalDestination: 1,
    price: 650_000,
  },
];
