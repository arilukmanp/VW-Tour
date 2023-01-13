import useScreenMobile from "lib/hooks/useScreenMobile";
import useWhatsapp from "lib/hooks/useWhatsapp";

export default function Contact() {
  const isMobile = useScreenMobile();
  const sendToWhatsapp = useWhatsapp();

  const message =
    "Halo%20admin,%0AAku%20mau%20tanya%20mengenai%20trip%20di%20VW%20Wisata%20Borobudur";

  return (
    <section id="contact-us">
      <div className="bg-white">
        <div className="flex px-6 md:px-10 py-12">
          <div className="w-full mx-auto max-w-5xl bg-[url('/images/bg_contact.webp')] bg-cover bg-center rounded-xl">
            <div className="py-6 md:py-8 px-6 md:px-10 flex flex-col justify-between items-start md:items-center md:flex-row lg:items-center relative before:absolute before:top-0 before:left-0 before:opacity-90 before:bg-gradient-to-r before:from-red-600 before:to-orange-400 before:rounded-xl before:w-full before:h-full">
              <div className="relative text-white">
                <div className="text-xl font-semibold">Butuh Bantuan?</div>
                <div className="mt-2 opacity-90 text-sm">
                  Admin akan memberikan bantuan terkait dengan pemesanan trip
                </div>
              </div>

              <a
                href={sendToWhatsapp({ isMobile: isMobile, message: message })}
                target="_blank"
                rel="noreferrer"
                className="relative mt-5 md:mt-0 self-end py-3 px-5 text-center rounded-lg transition shadow-xl bg-white bg-opacity-30 backdrop-blur-xl hover:bg-white hover:bg-opacity-40 active:bg-white active:bg-opacity-50"
              >
                <span className="block text-white text-sm font-medium">
                  Hubungi Admin
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
