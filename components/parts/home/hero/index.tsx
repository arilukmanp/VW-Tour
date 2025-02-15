import Header from "layouts/header";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import heroImage from "public/images/bg_hero.jpg";

export default function Hero() {
  return (
    <section id="home">
      <div className="w-full m-auto">
        <div className="relative min-h-screen">
          <Image
            src={heroImage}
            alt="VW Safari Borobudur"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="relative z-1">
            <Header />
          </div>

          <div className="relative px-4 pt-[50%] md:pt-[25%] xl:pt-[20%] 2xl:pt-60 justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <div className="max-w-xl mb-2">
                  <p className="max-w-lg mb-6 font-bold text-4xl text-white">
                    Jelajah alam dan budaya di Borobudur dengan VW Safari
                  </p>
                  <p className="mt-3 mb-10 text-white md:text-lg">
                    Waktunya untuk <i>healing</i> dengan berwisata menikmati
                    pemandangan alam, budaya, dan seni di Borobudur dengan VW
                    Safari
                  </p>
                </div>

                <div>
                  <a href="#trip">
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm"
                    >
                      Pesan Sekarang
                      <span>
                        <HiOutlineArrowNarrowRight size={20} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
