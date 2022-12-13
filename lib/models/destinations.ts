import { DestinationCategory } from "lib/types";

export interface DestinationInterface {
  category: DestinationCategory;
  image: string[];
  title: string;
  description: string;
  location: string;
  price?: number;
}

export const destinationsData: DestinationInterface[] = [
  {
    category: DestinationCategory.Tour,
    image: [
      "bukit-rhema/rhema_1.webp",
      "bukit-rhema/rhema_2.webp",
      "bukit-rhema/rhema_3.webp",
    ],
    title: "Bukit Rhema",
    description:
      "Gereja Ayam terletak Magelang, Jawa Tengah, Indonesia. Bangunan yang viral karena pernah menjadi lokasi syuting AADC 2. Meskipun disebut Gereja Ayam, bangunan tersebut sebetulnya berbentuk burung merpati. Bangunan tersebut digagas pengusaha Daniel Alamsyah pada tahun 1990an.",
    location: "Kembanglimus, Kec. Borobudur",
    price: 25_000,
  },
  {
    category: DestinationCategory.Tour,
    image: [
      "punthuk-setumbu/punthuk_1.webp",
      "punthuk-setumbu/punthuk_2.webp",
      "punthuk-setumbu/punthuk_3.webp",
      "punthuk-setumbu/punthuk_4.webp",
      "punthuk-setumbu/punthuk_5.webp",
      "punthuk-setumbu/punthuk_6.webp",
      "punthuk-setumbu/punthuk_7.webp",
      "punthuk-setumbu/punthuk_8.webp",
    ],
    title: "Punthuk Setumbu",
    description:
      "Destinasi wisata yang menawarkan pemandangan matahari terbit dengan latar belakang gunung Merapi dan Merbabu, dipercantik view Candi Borobudur, adapun beberapa spot foto yang disediakan.",
    location: "Karangrejo, Kec. Borobudur",
    price: 20_000,
  },
];
