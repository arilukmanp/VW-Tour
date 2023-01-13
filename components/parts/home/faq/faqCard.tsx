import { Disclosure } from "@headlessui/react";
import { IoChevronDownCircle } from "react-icons/io5";
import { FaqInterface } from "lib/models/faq";

interface FaqCardInterface {
  data: FaqInterface;
}

export default function FaqCard(props: FaqCardInterface) {
  const { question, answer } = props.data;

  return (
    <div className="max-w-xl mx-auto items-center bg-white rounded-xl border">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full px-3 md:px-6 py-5 justify-between items-center text-left text-sm font-medium rounded-xl text-slate-600 
              ${open && ""}`}
            >
              <span>{question}</span>
              <IoChevronDownCircle
                className={`h-5 w-5 text-orange-400 ${
                  open
                    ? "rotate-180 transform duration-100"
                    : "transform duration-100"
                }`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-3 md:px-6 py-3.5 bg-blue-50 bg-opacity-50 rounded-b-xl text-sm text-gray-500">
              {answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
