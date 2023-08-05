/* eslint-disable @next/next/no-img-element */

import { LogoCloudsInterface } from "lib/models/logo";

export default function LogoClouds({ data }: { data: LogoCloudsInterface[] }) {
  return (
    <section id="logo-clouds" className="bg-white py-8 lg:py-11">
      <div className="content-center overflow-hidden w-full">
        <div className="flex flex-col mx-auto">
          <div className="flex overflow-hidden select-none">
            <div className="flex-shrink-0 flex items-center justify-around min-w-full animate-marquee">
              {data.map((logo, index) => (
                <img
                  key={index}
                  className="w-36 lg:w-44 h-8 lg:h-12 object-contain"
                  src={`/images/logo/${logo.image}`}
                  alt={logo.title}
                />
              ))}
            </div>

            <div
              aria-hidden="true"
              className="flex-shrink-0 flex items-center justify-around min-w-full animate-marquee"
            >
              {data.map((logo, index) => (
                <img
                  key={index}
                  className="w-36 lg:w-44 h-8 lg:h-12 object-contain"
                  src={`/images/logo/${logo.image}`}
                  alt={logo.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
