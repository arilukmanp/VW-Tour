/* eslint-disable @next/next/no-img-element */

import { LogoCloudsInterface } from "lib/models/logo";

export default function LogoClouds({ data }: { data: LogoCloudsInterface[] }) {
  return (
    <section id="logo-clouds" className="bg-whiteBone pt-10 lg:pt-12 pb-2">
      <div className="grid content-center overflow-hidden w-full">
        <div className="flex flex-col mx-auto 2xl:container xl:px-8">
          <div className="flex overflow-hidden select-none">
            <div className="flex-shrink-0 flex items-center justify-around min-w-full animate-marquee">
              {data.map((logo, index) => (
                <img
                  key={index}
                  className="w-28 lg:w-36 h-8 lg:h-12"
                  src={logo.image}
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
                  className="w-28 lg:w-36 h-8 lg:h-12"
                  src={logo.image}
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
