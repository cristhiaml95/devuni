"use client";

import SectionTitle from "../Common/SectionTitle";
export default function Video() {

  return (
    <>
      <section className="relative z-10 bg-gray-50 dark:bg-gray-900 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title=""
            paragraph=""
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <div className="relative aspect-77/40 items-center justify-center">
                  <video
                    src="/videos/devuni.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
          </div>
        </div>
      </section>
    </>
  );
};
