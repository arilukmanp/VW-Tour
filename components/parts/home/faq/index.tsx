import FaqCard from "./faqCard";
import { FaqInterface } from "lib/models/faq";

interface Props {
  data: FaqInterface[];
}

export default function Faq({ data }: Props) {
  return (
    <section id="faq">
      <div className="bg-white">
        <div className="container px-5 md:px-8 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h3 className="sm:text-4xl text-3xl font-semibold mb-4 text-gray-900">
              FAQ
            </h3>
            <p className="lg:w-2/3 xl:w-1/2 mx-auto leading-relaxed text-base text-gray-500">
              Pertanyaan Yang Sering Ditanyakan
            </p>
          </div>

          <div className="mt-6 space-y-1 xl:mt-12">
            {data.map((faq, index) => (
              <FaqCard key={index.toString()} data={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
