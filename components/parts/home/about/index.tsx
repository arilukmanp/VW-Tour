export default function About() {
  return (
    <section id="about" className="bg-whiteBone">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-8 lg:py-16 md:py-12 md:px-12 py-9 px-4 mx-1 sm:px-12">
          <div className="lg:flex md:mt-12 mt-8 items-center">
            <div className="flex lg:w-1/2 lg:ml-4 lg:mb-0 mb-10 flex-col justify-center order-last">
              <h3 className="text-lime-500 text-sm font-medium mb-2">
                Tentang Kami
              </h3>
              <h1 className="text-slate-800 font-semibold text-3xl mb-5 lg:mb-6">
                VW Wisata Borobudur
              </h1>
              <p className="text-slate-500 text-sm text-justify">
                Wisata VW dilakukan dengan menaiki mobil klasik atau sering
                disebut mobil Pak Camat pada tahun 1970 dengan sensasi atap
                terbuka. Wisata VW ini terletak di Borobudur Kabupaten Magelang.
                Letak ini tidak jauh dari Jogja. Setelah berwisata ke Candi
                Borobudur Anda dapat menikmati alam, budaya, dan seni di
                Borobudur. VW safari tour Borobudur menjadi solusi bagi Anda
                untuk berwisata di Borobudur. VW Borobudur menyediakan berbagai
                pilihan paket wisata yang menarik seperti mengelilingi
                perdesaan, mengunjungi destinasi, dan explore wisata di
                Borobudur. VW Borobudur melayani Anda secara private tour,
                gathering, dan rapat kantor. Selain itu, kami menyediakan
                penginapan yang nyaman, bagus, dan terjangkau.
              </p>
            </div>

            <div className="flex lg:w-1/2 xl:px-10 lg:px-5">
              <iframe
                height="auto"
                src="https://www.youtube.com/embed/9QVIEaWf6vM?controls=0&showinfo=0&modestbranding=0"
                title="About Us Video"
                allowFullScreen
                className="w-full md:mx-20 lg:mx-0 sm:block mx-auto aspect-video shadow-xl shadow-slate-300 rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
