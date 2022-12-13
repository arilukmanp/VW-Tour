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
  {
    category: DestinationCategory.Tour,
    image: [
      "junkyard/junkyard_1.webp",
      "junkyard/junkyard_2.webp",
      "junkyard/junkyard_3.webp",
    ],
    title: "Junkyard Auto Park",
    description:
      "Junkyard Autopark & Coffee sebuah destinasi wisata baru bertema otomotif dengan menyajikan mobil-mobil bekas yang cocok buat jadi spot foto kekinian. Di tempat ini ada puluhan mobil klasik yang bisa kamu jadikan latar foto kamu.",
    location: "Wanurejo, Kec. Borobudur",
    price: 20_000,
  },
  {
    category: DestinationCategory.Tour,
    image: [
      "svarga-bumi/svarga_1.webp",
      "svarga-bumi/svarga_2.webp",
      "svarga-bumi/svarga_3.webp",
      "svarga-bumi/svarga_4.webp",
    ],
    title: "Svarga Bumi",
    description:
      "Svargabumi merupakan tempat alternatif wisata yang berada di sekitar candi Borobudur. Svargabumi menyuguhkan pemandagan lahan persawahan petani yang dihiasi spot foto menarik bagi pengunjung. Selain itu pemandangan candi Borobudur yang tampak gagah di sisi timur menambah pesona dari tempat ini.",
    location: "Jl. Borobudur-Ngadiharjo, Kec. Borobudur",
    price: 30_000,
  },
  {
    category: DestinationCategory.Resto,
    image: [
      "enam-langit/enamlangit_1.webp",
      "enam-langit/enamlangit_2.webp",
      "enam-langit/enamlangit_3.webp",
      "enam-langit/enamlangit_4.webp",
    ],
    title: "Enam Langit by Plataran",
    description:
      "Enam Langit adalah restoran dan cafe cocok untuk tempat bersantai, berdiri setinggi tiga meter dan bertengger di tepi tebing. Anda dapat melihat matahari terbit dan terbenam di enam gunung paling terkenal: Merapi, Merbabu, Telomoyo, Andong, Sumbing dan Prau; dan Anda juga akan mendapatkan pemandangan indah candi Borobudur dari sini.",
    location: "Candirejo, Kec. Borobudur",
  },
  {
    category: DestinationCategory.Resto,
    image: [
      "dagi/dagi_1.webp",
      "dagi/dagi_2.webp",
      "dagi/dagi_3.webp",
      "dagi/dagi_4.webp",
    ],
    title: "Dagi Hill by Manohara",
    description:
      "Dagi Hill by Manohara merupakan resto yang menawarkan view candi dengan latar belakang pegunungan Menoreh di sisi selatan dari atas bukit Dagi, menikmati sajian masakan bertema outdoor picnic set.",
    location: "Taman Wisata Candi Borobudur",
  },
];
