import Link from "next/link";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import useScreenMobile from "lib/hooks/useScreenMobile";

const menuData = [
  { title: "Home", link: "/#home" },
  { title: "Tentang Kami", link: "/#about" },
  { title: "Paket", link: "/#trip" },
  { title: "Destinasi", link: "/#destinations" },
  { title: "Tambahan", link: "/#additionals" },
  { title: "FAQ", link: "/#faq" },
];

function ListMenuWeb() {
  const list = menuData.map((item, index) => (
    <div
      key={index}
      className="p-2 text-slate-600 font-medium hover:text-slate-900 transition duration-100 self-center text-center"
    >
      <Link href={item.link}>{item.title}</Link>
    </div>
  ));

  return <>{list}</>;
}

function ListMenuMobile({ onClose }: { onClose: any }) {
  const list = menuData.map((item, index) => (
    <div key={index} onClick={() => onClose()}>
      <Link href={item.link}>{item.title}</Link>
    </div>
  ));

  return <>{list}</>;
}

export default function Header() {
  const isMobile = useScreenMobile();

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP;
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM;

  const whatsappMobileLink = `https://wa.me/${whatsapp}`;
  const whatsappWebLink = `https://web.whatsapp.com/send?phone=${whatsapp}`;
  const instagramLink = `https://instagram.com/${instagram}`;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex md:flex-col justify-between px-4 py-2 w-full">
          <div className="hidden md:flex justify-end items-center text-[0.65rem] gap-10 px-4">
            <a
              href={isMobile ? whatsappMobileLink : whatsappWebLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row"
            >
              <RiWhatsappFill size={15} className="text-teal-700 mr-1" />
              <p className="text-slate-600">{`+${whatsapp}`}</p>
            </a>

            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row"
            >
              <RiInstagramFill size={15} className="text-pink-700 mr-1" />
              <p className="text-slate-600">{instagram}</p>
            </a>
          </div>

          <div className="relative flex w-full justify-between gap-16">
            <Image
              src="/logo.png"
              alt="Logo"
              height={30}
              width={150}
              className="cursor-pointer object-contain"
            />

            <div className="hidden md:flex p-2">
              <div className="flex md:gap-6 text-sm">
                <ListMenuWeb />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Popover className="md:hidden">
              {({ open }) => {
                const body =
                  typeof document !== "undefined" &&
                  document.querySelector("body");

                if (body) {
                  open
                    ? body.setAttribute("style", "overflow: hidden")
                    : body.removeAttribute("style");
                }

                return (
                  <>
                    <Popover.Button
                      className="relative z-[3] inline-flex items-center rounded-lg p-2 bg-white bg-opacity-80 backdrop-blur shadow-md border-[0.5px] border-slate-100 focus:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <HiOutlineX size={24} className="text-slate-600" />
                        ) : (
                          <HiOutlineMenuAlt3
                            size={24}
                            className="text-slate-600"
                          />
                        )
                      }
                    </Popover.Button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[2] bg-slate-800/60 backdrop-blur"
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className="absolute inset-x-0 top-0 z-[2] origin-top rounded-b-2xl bg-white px-6 pb-6 pt-28 shadow-sm shadow-gray-900/20"
                          >
                            {({ close }) => (
                              <div className="space-y-4 flex flex-col gap-8 items-center mb-8">
                                <ListMenuMobile onClose={close} />
                              </div>
                            )}
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                );
              }}
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}
