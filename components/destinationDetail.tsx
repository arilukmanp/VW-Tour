/* eslint-disable @next/next/no-img-element */

import { Dispatch, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { BottomSheet } from "react-spring-bottom-sheet";
import useScreenMobile from "lib/hooks/useScreenMobile";
import { DestinationInterface } from "lib/models/destinations";

interface DestinationDetailInterface {
  data: DestinationInterface;
  isShow: boolean;
  setIsShow: Dispatch<boolean>;
}

interface ContentInterface {
  data: DestinationInterface;
  selectedIdxImage: number;
  setSelectedIdxImage: Dispatch<number>;
}

export default function DestinationDetail({
  data,
  isShow,
  setIsShow,
}: DestinationDetailInterface) {
  const [selectedIdxImage, setSelectedIdxImage] = useState(0);
  const isMobile = useScreenMobile();

  useEffect(() => {
    let delay = setTimeout(() => {
      setSelectedIdxImage(0);
    }, 300);

    return () => {
      delay;
    };
  }, [isShow]);

  if (isMobile) {
    return (
      <BottomSheet open={isShow} onDismiss={() => setIsShow(false)}>
        <Content
          data={data}
          selectedIdxImage={selectedIdxImage}
          setSelectedIdxImage={setSelectedIdxImage}
        />
      </BottomSheet>
    );
  }

  return (
    <Transition show={isShow} as={Fragment}>
      <Dialog onClose={() => setIsShow(false)} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-5xl rounded-xl bg-white">
              <Content
                data={data}
                selectedIdxImage={selectedIdxImage}
                setSelectedIdxImage={setSelectedIdxImage}
              />
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

function Content(props: ContentInterface) {
  const { data, selectedIdxImage, setSelectedIdxImage } = props;

  return (
    <div className="p-4 mx-auto text-gray-600 body-font overflow-hidden">
      <div className="mx-auto flex flex-wrap">
        <div className="relative lg:w-3/5 w-full lg:h-auto aspect-[4/3] bg-slate-100 rounded">
          <Image
            src={`/images/destinations/${data.images[selectedIdxImage]}`}
            alt={`Foto ${data.title}`}
            layout={"fill"}
            quality={50}
            className={"object-cover object-center rounded"}
          />
        </div>

        <div className="lg:w-2/5 w-full lg:pl-6 lg:py-2 mt-6 lg:mt-0">
          <div className="flex flex-col">
            <h1 className="text-slate-900 text-3xl font-semibold mb-2">
              {data.title}
            </h1>

            <div className="flex mb-4">
              <div className="px-2 py-0.5 sm:py-1 text-xs text-cyan-500 bg-slate-100 bg-opacity-90 rounded-sm sm:rounded-md">
                {data.category.valueOf()}
              </div>
            </div>

            <p className="leading-relaxed text-sm text-gray-500 mt-4">
              {data.description}
            </p>

            <div className="flex mt-3 items-center pb-5 order-first lg:order-none ">
              <div className="relative flex py-3 overflow-x-auto">
                {data.images.map((image, index) => (
                  <img
                    key={index.toString()}
                    onClick={() => setSelectedIdxImage(index)}
                    src={`/images/destinations/${image}`}
                    alt={`Foto ${data.title}`}
                    className={`w-16 mx-1 aspect-square cursor-pointer rounded-lg bg-slate-100 object-cover object-center ${
                      selectedIdxImage == index
                        ? "border-2 border-orangeSoft"
                        : "p-[2px]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex border-t-2 border-gray-100 pt-5 mt-5">
              <button className="flex mx-auto text-white bg-orangeSoft border-0 py-2 px-4 focus:outline-none hover:bg-orange-500 rounded-md">
                Pilih Destinasi Ini
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
