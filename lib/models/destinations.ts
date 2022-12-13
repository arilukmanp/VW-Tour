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
  {
    category: DestinationCategory.Tour,
    image: [
      "taman-kelinci/kelinci_1.webp",
      "taman-kelinci/kelinci_2.webp",
      "taman-kelinci/kelinci_3.webp",
      "taman-kelinci/kelinci_4.webp",
    ],
    title: "Taman Kelinci",
    description:
      "Ditaman kelinci ini pengunjung dapat berinteraksi secara langsung. Mulai memberi makan kacang panjang, bermain dan berfoto bersama kelinci yang dibiarkan bebas berkeliaran di area taman kelinci. Taman kelinci merupakan bagian dari wahana desa Bahasa Borobudur.",
    location: "Ngargogondo, Kec. Borobudur",
    price: 20_000,
  },
  {
    category: DestinationCategory.Education,
    image: [
      "lebah-madu/madu_1.webp",
      "lebah-madu/madu_2.webp",
      "lebah-madu/madu_3.webp",
    ],
    title: "Penangkaran Lebah Madu",
    description:
      "Ashfa Madu merupakan tempat peternakan lebah yang menghasilkan madu alami. Pengunjung dapat melihat langsung proses untuk menghasilkan madu hingga dapat dikonsumsi.",
    location: "Tanjungsari, Kec. Borobudur",
  },
  {
    category: DestinationCategory.Education,
    image: [
      "kopi-luwak/luwak_1.webp",
      "kopi-luwak/luwak_2.webp",
      "kopi-luwak/luwak_3.webp",
      "kopi-luwak/luwak_4.webp",
      "kopi-luwak/luwak_5.webp",
      "kopi-luwak/luwak_6.webp",
      "kopi-luwak/luwak_7.webp",
    ],
    title: "Kopi Luwak (Pawon Luwak Coffee)",
    description:
      "Pawon Luwak Coffee merupakan tempat wisata edukasi pengenalan proses pembuatan kopi luwak dari sisa proses kotoran luwak/musang hingga bisa diseduh. Pengunjung juga bisa menikmati kopi luwak tersebut sambil melihat luwak yang lucu-lucu.",
    location: "Wanurejo, Kec. Borobudur",
  },
  {
    category: DestinationCategory.Education,
    image: [
      "jamur/jamur_1.webp",
      "jamur/jamur_2.webp",
      "jamur/jamur_3.webp",
      "jamur/jamur_4.webp",
    ],
    title: "Budidaya Jamur",
    description:
      "Wisata edukasi tentang cara budidaya jamur serta hasil olahannya dapat dibawa pulang sebagai oleh-oleh.",
    location: "Wanurejo, Kec. Borobudur",
  },
  {
    category: DestinationCategory.Education,
    image: ["batik/batik_1.webp", "batik/batik_2.webp", "batik/batik_3.webp"],
    title: "Batik",
    description:
      "Tingal Art Borobudur merupakan tempat edukasi tentang produksi batik rumahan, pengunjungan juga dapat praktik membuat batik dan bisa dibawa pulang langsung.",
    location: "Wanurejo, Kec. Borobudur",
    price: 20_000,
  },
  {
    category: DestinationCategory.Education,
    image: [
      "gerabah/gerabah_1.webp",
      "gerabah/gerabah_2.webp",
      "gerabah/gerabah_3.webp",
    ],
    title: "Kerajinan Gerabah",
    description:
      "Pengalaman menarik bagi wisatawan yang ingin mencoba membuat sendiri kerajinan dari tanah liat (lempung) atau gerabah. Di Dusun Nglipoh ini memang sudah lama dikenal sebagai sentra kerajinan gerabah. Sebagian besar penduduknya adalah perajin gerabah.",
    location: "Karanganyar, Kec. Borobudur",
    price: 30_000,
  },
  {
    category: DestinationCategory.Education,
    image: [
      "gula-jawa/gula_1.webp",
      "gula-jawa/gula_2.webp",
      "gula-jawa/gula_3.webp",
      "gula-jawa/gula_4.webp",
      "gula-jawa/gula_5.webp",
    ],
    title: "Home Industry Gula Jawa",
    description:
      "Tempat ngopi dan edukasi gula jawa. Minum kopi dengan cara menggigit gula Jawa mungkin sudah sangat lama dilupakan orang jaman sekarang. Moment itulah yang kembali ingin diciptakan oleh Gubuk Kopi Borobudur dalam menyajikan kopi lokal kepada pengunjung.",
    location: "Sendaren, Kec. Borobudur",
  },
  {
    category: DestinationCategory.Education,
    image: [
      "rengginang/rengginang_1.webp",
      "rengginang/rengginang_2.webp",
      "rengginang/rengginang_3.webp",
      "rengginang/rengginang_4.webp",
      "rengginang/rengginang_5.webp",
      "rengginang/rengginang_6.webp",
      "rengginang/rengginang_7.webp",
    ],
    title: "Home Industry Rengginang",
    description:
      "Merupakan tempat produksi snack khas Borobudur khususnya makanan rengginang. Di sini juga pengunjung dapat melihat ikut praktik membuat rengginang.",
    location: "Wanurejo, Kec. Borobudur",
  },
];
