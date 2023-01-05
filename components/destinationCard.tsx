import { useState } from "react";
import Image from "next/image";
import { DestinationInterface } from "lib/models/destinations";
import DestinationDetail from "./destinationDetail";

export default function DestinationCard(props: { data: DestinationInterface }) {
  const data = props.data;
  let [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsShowModal(true)}
        className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer"
      >
        <div className="relative">
          <div className="relative w-full aspect-video">
            <Image
              src={`/images/destinations/${data.images[0]}`}
              alt={`Foto ÷${data.title}`}
              layout={"fill"}
              quality={50}
              className={"rounded-lg object-cover"}
            />
          </div>
          <div className="absolute bottom-0 w-full h-1/3 rounded-b-lg bg-gradient-to-t from-slate-900/50 to-slate-800/0" />
          <div className="absolute bottom-0 left-0 px-4 py-2.5">
            <h2 className="text-md font-semibold text-white">{data.title}</h2>
          </div>
        </div>
      </div>

      <DestinationDetail
        data={data}
        isShow={isShowModal}
        setIsShow={setIsShowModal}
      />
    </>
  );
}
